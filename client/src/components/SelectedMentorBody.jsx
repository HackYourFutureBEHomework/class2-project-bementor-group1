import React, { Component } from "react";
import Rating from "./SkillRating";

class SelectedMentorBody extends Component {
  renderUser(userprofile) {
    const listInterest = userprofile.interests.map(interest => (
      <li className="hover-intreset">{interest}</li>
    ));

    let listSkills = userprofile.skills.map(obj => {
      let rObjkey = {};
      let rObjrate = {};
      rObjkey = obj.key;

      rObjrate = obj.rate;

      return (
        <table>
          <tbody>
            <tr className="icon-a">
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
    const userprofile = this.props.selecteduser;
    //console.log("userprofile", userprofile);

    const $userProfile = this.renderUser(userprofile);
    return <div>{$userProfile}</div>;
  }
}

export default SelectedMentorBody;
