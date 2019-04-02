import Rating from "../components/SkillRating";

import React, { Component } from "react";

class UserProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      users: [],
      rate: []
    };
  }
  componentDidMount() {
    console.log("componemtdidmount");
    //console.log("this.props.selecteduser", this.props.selecteduser._id);
    const { userid } = this.props.userid;
    const singleuserurl = "http://localhost:4000/user/" + userid;
    fetch(singleuserurl)
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          users: json
        });
      });
    console.log("this.state.users", this.state.users);
    console.log("userid", userid);
  }
  renderUser(userprofile) {
    console.log("userprofile", userprofile);
    //console.log("this.state.users.interests", this.state.users.interests);
    let listInterest = userprofile.interests.map(interest1 => {
      return <li className="hover-intreset">{interest1}</li>;
    });

    let listSkills = userprofile.skills.map(obj => {
      let rObjkey = {};
      let rObjrate = {};
      rObjkey = obj.key;

      rObjrate = obj.rate;

      return (
        <table>
          <tbody>
            <tr className="hotel-a">
              <td>{rObjkey}</td>
              <td>
                <Rating rate={rObjrate} />
              </td>
            </tr>
          </tbody>
        </table>
      );
    });

    return (
      <div className="user-wrapper">
        <div className="user">
          <img
            className="user-image"
            src={"https://api.adorable.io/avatars/285"}
            alt="userimage"
          />
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
        <div className="user-info">
          <div className="user-interests-wraper">
            <h3 className="user-interests">Interests</h3>
            <ul className="user-interests-list">{listInterest}</ul>
          </div>
          <div className="user-skills-wraper">
            <h3 className="user-skills">Skills</h3>

            <ul className="user-skills-list">{listSkills}</ul>
          </div>
        </div>
      </div>
    );
  }
  render() {
    const { users, isLoaded } = this.state;
    console.log(" render", users);

    //const $userProfile = users.map(userprofile => this.renderUser(userprofile));
    //let $userProfile = this.renderUser(users);
    let $userProfile;
    if (!isLoaded) {
      return <div>Loading.....</div>;
    } else {
      $userProfile = this.renderUser(users);

      return <div>{$userProfile}</div>;
    }
  }
}

export default UserProfilePage;
