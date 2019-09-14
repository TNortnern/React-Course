import unsplash from "../api/unsplash";
import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends Component {
  state = { images: [] };
  onSearchSubmit = async term => {
    try {
      const res = await unsplash.get("/search/photos", {
        params: { query: term }
      });
      //   console.log(res.data.results)
      this.setState({ images: res.data.results });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found {this.state.images.length} images
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
export default App;
