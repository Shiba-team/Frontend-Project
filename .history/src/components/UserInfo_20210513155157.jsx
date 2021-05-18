import React, { Component } from "react";

class UserInfo extends Component {
  render() {
    return (
      <div class="col-4 h-100 d-flex justify-content-center align-items-center ">
        <div class="text-center card-box">
          <div class="member-card pt-2 pb-2">
            <div class="thumb-lg member-thumb mx-auto">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar2.png"
                class="rounded-circle img-thumbnail"
                alt="profile-image"
              />
            </div>
            <div class="">
              <h4 class="pt-3 pb-2">Freddie J. Plourde</h4>
              <p class="text-muted">
                Your key <span>| </span>
                <span class="text-pink">f09das8a998s9as99</span>
              </p>
              <p class="text-muted">
                User <span>| </span>
                <span class="text-pink">abc123@gmail.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default UserInfo;
