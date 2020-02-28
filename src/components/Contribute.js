import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { allTags, addCaption, createCaptionWithTags, addTags, } from '../redux/actions';
import store from '../redux/store';


class Contribute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      caption: false, tag: false, captionValue: '', tagValue: '', tagsArr: '', 
    };
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitTag = this.handleSubmitTag.bind(this);
  }

  handleOnClick({ target }) {
    if (target.name === 'caption') {
      this.setState({ tag: false })
      this.setState({ caption: true })
    }
    else {
      this.setState({ caption: false });
      this.setState({ tag: true })
    }
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  handleOptions() {
    const { allTags } = store.getState();
    return allTags.map((ele, index) => <option key={index} id={index} value={ele}>{ele}</option>);
  }

  handleSubmitTag (event) {
    event.preventDefault();
    this.props.addTags({tag: this.state.tagsArr})
    this.setState({tagsArr: ''})
  }

  handleSubmit(event) {
    event.preventDefault();
    const { captionValue, tagValue } = this.state;
    if (tagValue) {
      this.props.createCaptionWithTags({ caption: captionValue, tags: [tagValue] });
      this.setState({ captionValue: '' });
      this.setState({ tagValue: '' });
    } else {
      this.props.addCaption({ caption: captionValue });
      this.setState({ captionValue: '' });
    }
  }

  render() {
    return (
      <div className="main">
        <ul className="btn-cap-add">
          <li>
            <Link to="/contribute" name="caption" className="btn-add" onClick={this.handleOnClick}>Add Caption</Link>
          </li>
          <li>
            <Link to="/contribute" name="tag" className="btn-add" onClick={this.handleOnClick}>Add Tag</Link>
          </li>
        </ul>
        {this.state.caption
          ? (
            <form onSubmit={this.handleSubmit} className="con-form">
              <label>
                Caption:
                <textarea id="textarea" name="captionValue" value={this.state.captionValue} onChange={this.handleChange} />
              </label>
              <label>
                Pick a tag:
                <select name="tagValue" value={this.state.tagValue} onChange={this.handleChange}>
                  <option />
                  {this.handleOptions()}
                </select>
              </label>
              <input className="submit-btn" type="submit" value="Submit" />
            </form>
          )
          : ''}
        {this.state.tag ? 
          (
            <form onSubmit={this.handleSubmitTag} id="tag-form" className="con-form">
            <label>
              Tag:
              <input id="tag-input" type="text" name="tagsArr" value={this.state.tagsArr} onChange={this.handleChange} />
            </label>
            <button id="tag-btn" type="submit">Add</button>
            </form>
          )
          : ''}
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { allTags, addCaption, createCaptionWithTags, addTags, })(Contribute);
