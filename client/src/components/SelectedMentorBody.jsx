import React, { Component } from "react";
import Rating from "./SkillRating";
//import Mentors from "./Mentors";
//import { handleSelectContact } from "./Mentors";

class SelectedMentorBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      users: [],
      rate: [],
      selecteduser: undefined,
      isSelected: false
    };
  }

  componentDidMount() {
    fetch("http://localhost:4000/user")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          users: json
        });
      });
  }

  renderUser(userprofile) {
    const listInterest = userprofile.interests.map(interest => (
      <li className="hoverintreset">{interest}</li>
    ));

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
    //const { users, isLoaded } = this.state;
    /*const userprofile = this.props.selecteduser;
    console.log("userprofile", userprofile);

    const $userProfile = Mentors.map(userprofile =>
      this.renderUser(userprofile)
    );
    const $userProfile = this.renderUser(userprofile);
    /*
    if (!isLoaded) {
      return <div>Loading.....</div>;
    }
*/
    return <div>hello</div>;
  }
}

export default SelectedMentorBody;
