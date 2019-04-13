import React, { Component } from "react";

class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="edit-wrapper">
        <h2 className="edit-title">Hi Leia! You can edit your profile here:</h2>
        <div>
          <form className="edit-form">
            <label className="edit-title2">First Name</label>
            <input
              type="text"
              name="firstName"
              ref="firstName"
              alt="firstName"
              placeholder="LEIA"
            />

            <label className="edit-title2">Last Name</label>
            <input
              type="text"
              name="lastName"
              ref="lastName"
              alt="lastName"
              placeholder="ORGANA"
            />

            <label className="edit-title2">Bio</label>
            <input
              type="text"
              name="bio"
              ref="bio"
              alt="bio"
              className="edit-bio"
            />
            <label className="edit-title2">Add Interests</label>
            <input type="text" name="interest" ref="interest" alt="interest" />
            <label className="edit-title2">Add Skills</label>
            <input type="text" name="skill" ref="skill" alt="skill" />
            <label className="edit-title2">Update your photo</label>
            <button
              type="button"
              onClick={this.updateProfile}
              id="submit"
              name="submit"
              className="edit-photo"
            >
              Choose file
            </button>
            <div className="buttons-container">
              <button
                type="button"
                onClick={this.updateProfile}
                id="submit"
                name="submit"
                className="save-profile"
              >
                Save changes
              </button>

              <button
                type="button"
                onClick={this.updateProfile}
                id="submit"
                name="submit"
                className="delete-profile"
              >
                Delete profile
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default EditForm;
