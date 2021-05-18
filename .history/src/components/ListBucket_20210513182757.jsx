import React, { Component, useState } from "react";
import CrudButton from "./CrudButton";
import {MDBDataTableV5} from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "../mycss.css"
import $ from "jquery";

let deleteButton = []

class ListBucket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colNumber: 2,
    }
  }

  deleteRow = id => {
    $(`#button_${id}`).addClass('disabled')
    deleteButton.push(id);
    this.props.deleteRow(id);
  }

  addDeleteButton = (id) =>{
    let button = `button_${id}`;
    let buttonClass = "btn btn-danger";
    if (this.props.showDelete===true)
    return (
      <button id={button} type="button" className={ (deleteButton.indexOf(id)>-1) ? buttonClass : "btn btn-danger disabled"} onClick={()=> this.deleteRow(id)}><i class="fa fa-trash"></i></button>)
    else return;
  }

  addApplyButton = () => {
    if (this.props.showDelete===true)
    return (
      <button type="button" className="btn btn-success" onClick={this.props.applyDeleteAction}>Apply Changes</button>)
    else return;
  }



  render() {
    let listBucket = [];
    let buckets = this.props.buckets;
      for (let i = 0; i < buckets.length; i++){
        let bucket = {
          id: buckets[i].id,
          bucketName: buckets[i].bucketName,
          lastUpdate: (<div className="row"><div className="col-10" >{buckets[i].lastUpdate}</div> <div className="col-2">{this.addDeleteButton(buckets[i].id)}</div></div>),
        }
        listBucket.push(bucket);
      }
    const data = {
      columns: [
      {
        label: 'ID',
        field: 'id',
        sort: 'asc',
        width: 50
      },
      {
        label: 'Bucket Name',
        field: 'bucketName',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Last Update',
        field: 'lastUpdate',
        sort: 'asc',
        width: 300
      },
    ],
    rows: listBucket,
    };
    return (
      <div className="col-8 position-relative" style={{height: 600}}>
        <CrudButton open={this.props.open} showDeleteAction={this.props.showDeleteAction} hideDeleteAction={this.props.hideDeleteAction} showDelete = {this.props.showDelete}/>
        <MDBDataTableV5 hover data={data} striped info={false} entries={5} displayEntries={false} noBottomColumns materialSearch theadColor="bg-info" theadTextWhite maxHeight="350px" barReverse>
        </MDBDataTableV5>
          
        <div className="row pt-3 position-absolute w-100" style={{height: 50, bottom: 10, right: 10}}>
        <div className="col-10"></div>
        
        <div className="col-2">{this.addApplyButton()}
        </div> 
        </div>
      </div>
    );
  }
}
export default ListBucket;
