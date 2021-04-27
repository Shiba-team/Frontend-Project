import React, { Component } from "react";
import ListBucket from "./components/ListBucket.jsx";
import UserInfo from "./components/UserInfo.jsx";
import ModalForm from "./components/modalForm.jsx";

class App extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
    };
  }
  close = () => {
    this.setState({ showModal: false });
  };

  open = () => {
    this.setState({ showModal: true });
  };
  render() {
    return (
      <div class="mycontainer  d-flex justify-content-center align-items-center ">
        <div class="row w-100">
          <UserInfo></UserInfo>
          <ListBucket open={this.open}></ListBucket>
        </div>
        <ModalForm
          showModal={this.state.showModal}
          close={this.close}
        ></ModalForm>
      </div>
    );
  }
}

export default App;
