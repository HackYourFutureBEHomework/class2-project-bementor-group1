import Rating from "../components/SkillRating";

import React, { Component } from "react";

class UserProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      user: [],
      rate: []
    };
  }
  componentDidMount() {
    const { userid } = this.props.userid;
    const singleuserurl = "http://localhost:4000/api/user/" + userid;

    fetch(singleuserurl)
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          user: json
        });
      });
  }

  renderUser(userprofile) {
    let listInterest = userprofile.interests.map(interest1 => {
      return (
        <li className="hover-intreset">
          {("Web development", "Travel the galaxie")}
        </li>
      );
    });

    let listSkills = userprofile.skills.map(obj => {
      let rObjkey = {};
      let rObjrate = {};
      rObjkey = obj.key;

      rObjrate = obj.rate;

      return (
        <table>
          <tbody>
            <tr>
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
            src={"http://www.facetheforce.today/leia"}
            alt="userimage"
          />
          <div className="user-intro">
            <h2 className="user-name">
              {"LEIA"} {"ORGANA"}
            </h2>

            <h2 className="user-quote">{"Princess of Alderaan"}</h2>
          </div>
        </div>
        <div className="user-title">
          <h3 className="user-title1">Campus</h3>
          <h3 className="user-title2">{"D’Qar"}</h3>
          <button
            type="button"
            onClick={this.updateProfile}
            id="submit"
            name="submit"
            className="user-update"
          >
            Edit
          </button>
        </div>
        <h3 className="user-title3">Bio</h3>
        <p className="user-description">
          {
            "I'm a woman sensitive to the Force, princess of Alderaan, member of the Imperial Senate, leader of the Alliance to Restore the Republic, member of the Galactic Senate and General of the Resistance. Born to my twin brother, Luke Skywalker in 19 BBY as Leia Amidala Skywalker. Daughter of Jedi Knight Anakin Skywalker and Senator Padmé Amidala of Naboo."
          }
        </p>
        <div className="user-info">
          <div className="user-interests-wraper">
            <h3 className="user-interests">Interests</h3>
            <ul className="user-interests-list">
              <li>Web development</li>
              <br />
              <li>Fighting the Empire </li>
              <br />
              <li>Travel de Galaxy </li>
              <li />
            </ul>
          </div>
          <div className="user-skills-wraper">
            <h3 className="user-skills">Skills</h3>

            <ul className="user-skills-list">
              <div class="skill-column">
                <div class="skill-label">JavaScript</div>
                <div class="skill-icons">
                  <span className="active" />
                  <span className="active" />
                  <span className="active" />
                  <span className="active" />
                  <span className="active" />
                  <span className="active" />
                  <span className="active" />
                  <span className="active" />
                  <span className="active" />
                  <span className="active" />
                </div>
              </div>
              <div class="skill-column">
                <div class="skill-label">MongoDB</div>
                <div class="skill-icons">
                  <span className="active" />
                  <span className="active" />
                  <span className="active" />
                  <span className="active" />
                  <span className="active" />
                </div>
              </div>
              <div class="skill-column">
                <div class="skill-label">Web desing</div>
                <div class="skill-icons">
                  <span className="active" />
                  <span className="active" />
                  <span className="active" />
                  <span className="active" />
                  <span className="active" />
                  <span className="active" />
                  <span className="active" />
                </div>
              </div>
              <div class="skill-column">
                <div class="skill-label">Jedi abilities</div>
                <div class="skill-icons">
                  <span className="active" />
                  <span className="active" />
                  <span className="active" />
                  <span className="active" />
                  <span className="active" />
                  <span className="active" />
                  <span className="active" />
                  <span className="active" />
                  <span className="inactive" />
                  <span className="inactive" />
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  render() {
    const { user, isLoaded } = this.state;

    let $userProfile;
    if (!isLoaded) {
      return <div>Loading.....</div>;
    } else {
      $userProfile = this.renderUser(user);

      return <div>{$userProfile}</div>;
    }
  }
}

export default UserProfilePage;
