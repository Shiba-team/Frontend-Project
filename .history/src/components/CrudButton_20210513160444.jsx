import React, { Component } from "react";
import { ModalForm } from "./modalForm";

class CrudButton extends Component {
  constructor(props) {
    super(props);
  }

  handleDelete = () =>{
    if (this.props.showDelete === false)
    return (<div className="col-4 d-flex justify-content-center align-items-center">
    <a href="#" className="btn btn-danger pl-5 pr-5" onClick={this.props.showDeleteAction}>
      <i className="fa fa-trash"> </i>&nbsp;Delete Bucket
    </a>
  </div>)
  else return (
    <div className="col-4 d-flex justify-content-center align-items-center">
    <a href="#" className="btn btn-danger pl-5 pr-5" onClick={this.props.hideDeleteAction}>
      <i className="fa fa-trash"> </i>&nbsp;Discard changes
    </a>
  </div>
  )
  }

  render() {
    return (
      <div className="row w-100 pb-3 mt-5">
        <div className="col-4 d-flex justify-content-center align-items-center">
          <a
            href="#"
            className="btn btn-primary pl-5 pr-5"
            onClick={this.props.open}
          >
            <i className="fa fa-plus"> </i>&nbsp;Add Bucket
          </a>
        </div>
        {this.handleDelete()}
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
