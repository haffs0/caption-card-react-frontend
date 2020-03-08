import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from './Loader'

class TagResult extends Component {
  render() {
    const { tagCaption } = this.props;
    const value = tagCaption[0].captions;
    const captions = value.map((ele, index) => <div key={index} id={index} className="card fade-active fading"><p>{ele}</p></div>);
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

const mapStateToProps = ({tagCaption}) => {
  return { tagCaption };
};

export default connect(mapStateToProps, null)(TagResult);
