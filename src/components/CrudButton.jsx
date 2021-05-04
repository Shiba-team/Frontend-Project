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
            className="btn btn-primary pl-3 pr-3"
            onClick={this.props.open}
          >
            <i className="fa fa-plus mr-2"> </i>&nbsp;Create Bucket
          </a>
        </div>
        <div className="col-4 d-flex justify-content-center align-items-center">
          <a href="#" className="btn btn-danger pl-3 pr-3">
            <i className="fa fa-trash mr-2"> </i>&nbsp;Delete Bucket
          </a>
        </div>
        <div className="col-4 d-flex justify-content-center align-items-center">
          <a href="#" className="btn btn-warning pl-3 pr-3">
            <i className="fa fa-minus mr-2"> </i>&nbsp;Empty Bucket
          </a>
        </div>
      </div>
    );
  }
}
export default CrudButton;
