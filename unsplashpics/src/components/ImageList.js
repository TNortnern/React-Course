import React, { Component } from "react";
import './ImageList.css'

class ImageList extends Component {
  state = {};
  render() {
    const img = this.props.images.map(image => {
      return <img src={image.urls.regular} key={image.id} alt={image.description} />
    });
    return <div className="image-list">{img}</div>;
  }
}

export default ImageList;
