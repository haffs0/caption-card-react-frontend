import React, { Component } from 'react';
import { connect } from 'react-redux';
import { allCaptions } from '../redux/actions';
import Loader from './Loader'


class CaptionList extends Component {

  componentDidMount() {
    this.props.allCaptions();
  }

  render() {
    const { value } = this.props;
    const captions = value.map( (ele, index) => <div key={ele.id} id={index} className="card fade-active fading"><p>{ele.caption}</p></div>)
    if(value.length === 0) {
      return <Loader/>
    }
    return (
      <div className="caption-list">
        {captions}
      </div>
    );
  }
}

const mapStateToProps = ({posts}) => {
  const value = Object.values(posts)
  return { value };
};

export default connect(mapStateToProps, { allCaptions })(CaptionList);
