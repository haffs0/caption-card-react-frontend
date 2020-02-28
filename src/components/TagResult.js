import React, { Component } from 'react';
import { connect } from 'react-redux';

class TagResult extends Component {
  render() {
      console.log(this.props)
    const { tagCaption } = this.props;
    console.log(tagCaption[0].captions)
    const value = tagCaption[0].captions;
    const captions = value.map((ele, index) => <div key={index} id={index} className="card fade-active fading"><p>{ele}</p></div>);
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
