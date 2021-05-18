import React, { Component } from "react";
import CrudButton from "./CrudButton";
import {MDBDataTable} from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';

import "../mycss.css"

class ListBucket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colNumber: 2,
      buckets: this.props.buckets,
      listbuckets: [],
    }
  }

  componentDidMount(){
    let listBucket = [];
    for (let i = 0; i < this.state.buckets.length; i++){
      let bucket = {
        id: this.state.buckets[i].id,
        bucketName: this.state.buckets[i].bucketName,
        lastUpdate: <div className="row"><div className="col-10 my-auto" >{this.state.buckets[i].lastUpdate}</div> <div className="col-2 my-auto">{this.addDeleteButton(this.state.buckets[i].id)}</div></div>,
      }
      listBucket.push(bucket);
    }
    this.setState({
      listbuckets: listBucket
    })
  }

  addDeleteButton = (id) =>{
    if (this.props.showDelete===true)
    return (
      <button type="button" className="btn btn-danger alignButton" onClick={()=> this.props.deleteRow(id)}><i class="fa fa-trash"></i></button>)
    else return;
  }

  addApplyButton = () => {
    if (this.props.showDelete===true)
    return (
      <button type="button" className="btn btn-success" onClick={this.props.applyDeleteAction}>Apply Changes</button>)
    else return;
  }



  render() {
    const data = {
      columns: [
      {
        label: 'ID',
        field: 'id',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Bucket Name',
        field: 'bucketName',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Last Update',
        field: 'lastUpdate',
        sort: 'asc',
        width: 270
      },
    ],
    rows: this.state.listbuckets,
    };
    return (
      <div className="col-8">
        <CrudButton open={this.props.open} showDeleteAction={this.props.showDeleteAction} hideDeleteAction={this.props.hideDeleteAction} showDelete = {this.props.showDelete}/>
          
        <MDBDataTable hover data={data} striped info={false} entries={6} displayEntries={false} noBottomColumns theadColor="bg-info" theadTextWhite maxHeight="350px">
        </MDBDataTable>
          
        <div className="row pt-3" style={{height: 50}}>
        <div className="col-10"></div>
        
        <div className="col-2">{this.addApplyButton()}
        </div> 
        </div>
      </div>
    );
  }
}
export default ListBucket;
