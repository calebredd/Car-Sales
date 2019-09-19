import React from "react";
import { connect } from "react-redux";

class Title extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    title: state.title
  };
};

export default connect(
  mapStateToProps,
  {}
)(Title);
