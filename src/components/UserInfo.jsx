import React, { Component } from "react";

class UserInfo extends Component {
  render() {
    return (
      <div className="col-4 d-flex justify-content-center align-items-center ">
        <div className="text-center card-box">
          <div className="member-card pt-2 pb-2">
            <div className="thumb-lg member-thumb mx-auto">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar2.png"
                className="rounded-circle img-thumbnail"
                alt="profile-image"
              />
            </div>
            <div className="">
              <h4 className="pt-3 pb-2">Freddie J. Plourde</h4>
              <p className="text-muted">
                Your key <span>| </span>
                <span className="text-pink">f09das8a998s9as99</span>
              </p>
              <p className="text-muted">
                User <span>| </span>
                <span className="text-pink">abc123@gmail.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default UserInfo;
