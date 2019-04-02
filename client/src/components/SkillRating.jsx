import React, { Component } from "react";

class Rating extends Component {
  render() {
    const rating = this.props.rate;

    const max = 5;

    let stars = [];

    for (let i = 0; i < rating; i++) {
      stars.push(<i className="fas fa-circle icon-a" />);
    }

    for (let i = stars.length; i < max; i++) {
      stars.push(<i className="fas fa-circle icon-b" />);
    }
    return <span className="rating_all">{stars}</span>;
  }
}

export default Rating;
