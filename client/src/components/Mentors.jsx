import React, { Component } from "react";

import Footer from "../components/Footer";
import SearchBar from "./SearchBar";
import MainHeader from "./MainHeader";

import "../assets/css/searchMentor.css";
import { getUsers } from "../api/users";
//import UserProfile from "./UserProfile";

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

  // userpage = event => {
  //   console.log("event.target.value", this.state.users);
  // };

  redirectToTarget = searchProfile => {
    this.setState({
      selecteduser: searchProfile._id,
      isSelected: true
    });
    console.log("this.selecteduser: ", this.state.selecteduser);
    this.props.history.push("/selectedmentor");
  };

  handleSelectContact(searchProfile) {
    //console.log("selected user: ", searchProfile);
    this.setState({
      selecteduser: searchProfile,
      isSelected: true
    });
    console.log("this.selecteduser: ", this.state.selecteduser);
  }

  renderProfile(searchProfile) {
    let shortBio = searchProfile.bio;
    shortBio = shortBio.substring(0, 20) + "...";
    /*    console.log("tafter selection", this.state.selecteduser);
    console.log("isSelected", this.state.isSelected);
    if (this.state.isSelected === true) {
      const userprofile = this.state.selecteduser;

      console.log(
        "this.state.selecteduser.length id",
        this.state.selecteduser._id
      );

      return (
        <div className="user-wrapper">
          <div className="user">
            <img className="user-image" src={userprofile.img} alt="userimage" />
            <div className="user-intro">
              <h2 className="user-name">
                {userprofile.firstName} {userprofile.lastName}
              </h2>

              <h2 className="user-quote">{userprofile.tagLine}</h2>
            </div>
          </div>
          <div className="user-title">
            <h3 className="user-title1">Campus</h3>
            <h3 className="user-title2">{userprofile.campus}</h3>
          </div>
          <h3 className="user-title3">Bio</h3>
          <p className="user-description">{userprofile.bio}</p>
        </div>
      );
    } else {*/
    /*
    return (
      <div
        className="user-profile"
        onClick={this.handleSelectContact.bind(this, searchProfile)}
        key={searchProfile._id}
      >
*/
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
    //}
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
