import React, { Component } from "react";
import MainHeader from "./MainHeader";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import { findMentors } from "../api/mentors";

class Mentors extends Component {
  onSearch = mentors => {
    this.setState({
      mentors: mentors
    });
  };

  render() {
    return (
      <div>
        <MainHeader />
        <SearchBar onSearch={this.onSearch} />

        <Footer />
      </div>
    );
  }
}
export default Mentors;