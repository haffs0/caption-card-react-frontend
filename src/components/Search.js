import React, { Component } from 'react';
import { connect } from 'react-redux';
import { allTags, getCaptionUnderTag, captionMultipleTags } from '../redux/actions';
import store from '../redux/store';


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tagsArr: '', tagsArray: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleAddTag = this.handleAddTag.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.allTags();
    console.log(store.getState())
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  handleTag() {
    const { tagsArray } = this.state;
    return tagsArray.map((ele) => (<li key={ele} className="tag-name">{ele} <span data-name={ele} onClick={this.handleDelete}>x</span></li>));
  }

  handleAddTag(event) {
    event.preventDefault();
    const { tagsArr, tagsArray} = this.state;
    if (tagsArr.length !== 0) {
      this.setState({tagsArray: [...tagsArray, tagsArr] })
      this.setState({ tagsArr: ''})
    }

    setTimeout( () => {
      if (this.state.tagsArray.length === 1) {
        const { allTags } = store.getState();
        console.log(store.getState())
        const index = allTags.indexOf(this.state.tagsArray[0]) + 1;
        console.log(index)
        this.props.getCaptionUnderTag(index);
      }
      else {
        console.log(this.state.tagsArray)
        this.props.captionMultipleTags({ tags: [...this.state.tagsArray] });
      }
    }, 500)
  }

  handleDelete({ target }) {
    const { tagsArray } = this.state;
    const filterArray = tagsArray.filter((ele) => ele !== target.dataset.name);
    this.setState({ tagsArray: filterArray });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddTag} id="search-form">
          <input id="search-input" type="text" name="tagsArr" value={this.state.tagsArr} onChange={this.handleChange} placeholder="Search" />
        </form>
        <div>
          <ul id="list-name">
            {this.handleTag()}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;
export default connect(mapStateToProps, { allTags, getCaptionUnderTag, captionMultipleTags })(Search);
