import React from "react";
import { withRouter } from "react-router-dom";
import Header from "./Header";
import Review from "./Review";
import SelectFile from "./SelectFile";
import SetProperties from "./SetProperties";

import { routeConfigs } from "../constants/routeConfigs";

class UploadPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      owner: "test_user",
      steps: ["upload file", "set properties", "review"],
      currentStep: 0,
      files: [],
      permissions: {
        object: "read",
        objectPermistion: "read",
        publicPermission: false,
      },
    };

    this.nextStep = () => {
      if (this.state.currentStep < this.state.steps.length - 1) {
        this.setState((state) => {
          return {
            currentStep: state.currentStep + 1,
          };
        });
      }
    };

    this.previousStep = () => {
      if (this.state.currentStep > 0) {
        this.setState((state) => {
          return {
            currentStep: state.currentStep - 1,
          };
        });
      } else {
        this.props.history.push(routeConfigs.detailBucket.path);
      }
    };

    this.addFile = (newFile) => {
      if (this.state.files.some((i) => i.name === newFile.name)) {
        return;
      }

      this.setState((state) => {
        return {
          files: [...state.files, newFile],
        };
      });
    };

    this.removeFile = (fileName) => {
      const reducer = (arr, value) => {
        if (value.name !== fileName) {
          return [...arr, value];
        } else {
          return arr;
        }
      };

      this.setState({
        files: this.state.files.reduce(reducer, []),
      });
    };

    this.setPermissions = (newPermissions) => {
      this.setState({
        permissions: newPermissions,
      });
    };

    this.content = () => {
      switch (this.state.steps[this.state.currentStep]) {
        case "upload file":
          return (
            <SelectFile
              files={this.state.files}
              addFile={this.addFile}
              removeFile={this.removeFile}
            />
          );
        case "set properties":
          return (
            <SetProperties
              owner={this.state.owner}
              setPermissions={this.setPermissions}
            />
          );
        case "review":
          return <Review files={this.state.files} />;
        default:
          return <div>default</div>;
      }
    };
  }

  render() {
    const content = this.content();
    return (
      <div className="UploadPage-wrapper">
        <div className="UploadPage-body">
          <Header currentStep={this.state.steps[this.state.currentStep]} />
          <div className="UploadPage-content">{content}</div>
          <div className="UploadPage-navButtons">
            <button onClick={this.previousStep}>Cancel</button>
            <button onClick={this.nextStep}>Next</button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(UploadPage);
