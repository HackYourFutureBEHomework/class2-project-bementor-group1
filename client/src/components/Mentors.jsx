import React, { Component } from "react";

import Footer from "../components/Footer";
import SearchBar from "./SearchBar";
import MainHeader from "./MainHeader";

import "../assets/css/searchMentor.css";
import { getUsers } from "../api/users";

class Mentors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      users: [],
      selecteduser: undefined,
      isSelected: false
    };
  }

  async componentDidMount() {
    const users = await getUsers();
    this.setState({
      users: users
    });
  }

  onSearch = mentors => {
    this.setState({
      users: mentors
    });
  };

  redirectToTarget = searchProfile => {
    this.setState({
      selecteduser: searchProfile,
      isSelected: true
    });
    //console.log("this.selecteduser: ", searchProfile);
    this.props.history.push({
      pathname: "/selectedmentor",
      state: { selecteduser: searchProfile }
    });
  };

  handleSelectContact(searchProfile) {
    this.setState({
      selecteduser: searchProfile,
      isSelected: true
    });
    console.log("this.selecteduser: ", this.state.selecteduser);
  }

  renderProfile(searchProfile) {
    let shortBio = searchProfile.bio;
    shortBio = shortBio.substring(0, 20) + "...";

    return (
      <div
        className="user-profile"
        onClick={this.redirectToTarget.bind(this, searchProfile)}
        key={searchProfile._id}
      >
        <img
          className="user-image1"
          src={"https://api.adorable.io/avatars/285"}
          alt="userimage"
        />
        <div className="mentorprofile">
          <h2 className="user-name1">
            {searchProfile.firstName} {searchProfile.lastName}
          </h2>
          <h2 className="user-quote1">{shortBio}</h2>
        </div>
      </div>
    );
  }

  render() {
    const { users } = this.state;
    const $searchProfile = users.map(searchProfile =>
      this.renderProfile(searchProfile)
    );

    return (
      <div>
        <MainHeader />
        <SearchBar onSearch={this.onSearch} />
        <div className="container1">{$searchProfile}</div>
        <Footer />
      </div>
    );
  }
}
export default Mentors;
