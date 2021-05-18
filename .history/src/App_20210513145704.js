import React, { Component } from "react";
import ListBucket from "./components/ListBucket.jsx";
import UserInfo from "./components/UserInfo.jsx";
import ModalForm from "./components/modalForm.jsx";
import faker from "faker";

class App extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      buckets: [],
      recycleBin: [],
      showDelete: false,
    };
  }

  makeBucketList = () => {
    let listbuckets = this.state.buckets;
    for (let i = 0; i < 10; i++) {
      const bucket = {
        id: i + 1,
        bucketName: faker.company.companyName(),
        lastUpdate: new Date().toString(),
      };
      listbuckets.push(bucket);
    }
    this.setState({
      buckets: listbuckets,
    });
  };

  componentDidMount() {
    this.makeBucketList();
  }

  addNewBucket = (bucket) => {
    let listbucket = this.state.buckets;
    listbucket.push(bucket);
    this.setState({
      buckets: listbucket,
    });
  };

  applyDeleteAction = () => {
    this.setState({
      showDelete: false,
    });
    this.setState({
      recycleBin: [],
    });
  };

  setBin = (bin) => {
    this.setState({
      recycleBin: bin,
    });
  };

  showDeleteAction = () => {
    this.setState({
      showDelete: true,
    });
  };

  hideDeleteAction = () => {
    this.setState({
      showDelete: false,
    });
    let bin = this.state.recycleBin;
    let bucket = this.state.buckets;
    Array.prototype.push.apply(bucket, bin);
    this.setState({
      buckets: bucket,
      recycleBin: [],
    });
  };

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
          <ListBucket
            open={this.open}
            makeBucketList={this.makeBucketList}
            buckets={this.state.buckets}
            recycleBin={this.state.recycleBin}
            deleteRow={this.deleteRow}
            applyDeleteAction={this.applyDeleteAction}
            showDelete={this.state.showDelete}
            showDeleteAction={this.showDeleteAction}
            hideDeleteAction={this.hideDeleteAction}
            setBin={this.setBin}
          ></ListBucket>
        </div>
        <ModalForm
          showModal={this.state.showModal}
          close={this.close}
          addNewBucket={this.addNewBucket}
          bucketsLength={Math.max.apply(
            Math,
            this.state.buckets.map(function (o) {
              return o.id;
            })
          )}
        ></ModalForm>
      </div>
    );
  }
}

export default App;
