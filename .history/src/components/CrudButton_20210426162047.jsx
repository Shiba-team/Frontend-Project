import React, { Component } from "react";
import { ModalForm } from "./modalForm";

class CrudButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row w-100 pb-3">
        <div className="col-4 d-flex justify-content-center align-items-center">
          <a
            href="#"
            className="btn btn-primary pl-5 pr-5"
            onClick={this.props.open}
          >
            <i className="fa fa-plus"> </i>&nbsp;Add Bucket
          </a>
        </div>
        <div className="col-4 d-flex justify-content-center align-items-center">
          <a href="#" className="btn btn-danger pl-5 pr-5">
            <i className="fa fa-trash"> </i>&nbsp;Delete Bucket
          </a>
        </div>
        <div className="col-4 d-flex justify-content-center align-items-center">
          <a href="#" className="btn btn-warning pl-5 pr-5">
            <i className="fa fa-minus"> </i>&nbsp;Empty Bucket
          </a>
        </div>
      </div>
    );
  }
}
export default CrudButton;
