import React, { Component } from "react";
import CrudButton from "./CrudButton";



import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 

import "../mycss.css"

class ListBucket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDelete: false,
      colNumber: 2,
      recycleBin: [],
    }
  }

  showDeleteAction = () => {
    this.setState({
      showDelete:true,
    })
  }

  hideDeleteAction = () => {
    this.setState({
      showDelete: false,
    })
    let table = $('#sort').DataTable();
    for (let i = 0; i<this.state.recycleBin.length; i++){
      let id = this.state.recycleBin[i];
      table.$(`#row_${id}`).css('display', 'table-row');
    }
    this.setState({
      recycleBin: [],
    })
  }

  componentDidMount(){
    this.createTable();
  }

  createTable = () =>{
    
  }

  buildRow = (bucket) =>{
    const id = 'row_'+bucket.id;
    return (
      <tr id = {id} key={id}>
      <td> {bucket.id} </td> 
      <td> {bucket.bucketName}</td> 
      <td className="row"> <div className="col-10 my-auto">{bucket.lastUpdate}</div> <div className="col-2 my-auto">{this.addDeleteButton(bucket.id)}</div></td>
      </tr>
    )
  }

  addDeleteButton = (id) =>{
    if (this.state.showDelete===true)
    return (
      <button type="button" className="btn btn-danger alignButton" onClick={()=> this.deleteRow(id)}><i class="fa fa-trash"></i></button>)
    else return;
  }

  addApplyButton = () => {
    if (this.state.showDelete===true)
    return (
      <button type="button" className="btn btn-success" onClick={this.applyDeleteAction}>Apply Changes</button>)
    else return;
  }

  applyDeleteAction =() =>{
    this.setState({
      showDelete: false
    })
    let table = $('#sort').DataTable();
    for (let i = 0; i<this.state.recycleBin.length; i++){
      let id = this.state.recycleBin[i];
      table.row(`#row_${id}`).remove().draw(false);
    }
    this.setState({
      recycleBin: [],
    })
  }

  deleteRow = (id) =>{
    ///const listbuckets = this.state.buckets.filter((row) => row.id !== id);
    //this.setState({
    //  buckets: listbuckets,
    //})
    let bin = this.state.recycleBin;
    bin.push(id);
    this.setState({
      recycleBin: bin,
    })
    let table = $('#sort').DataTable();
    $(`#row_${id}`).hide();
    table.order( [[ 0, 'asc' ]] )
    .draw( false );
  }

  render() {
    return (
      <div className="col-8">
        <CrudButton open={this.props.open} showDeleteAction={this.showDeleteAction} hideDeleteAction={this.hideDeleteAction} showDelete = {this.state.showDelete}/>
        <div>
          <table id="sort" className="table table-hover w-100" >
            <thead>
              <tr className="bg-info text-white">
                <th> ID </th> <th> Bucket Name </th> <th> Last Update </th>
              </tr>
            </thead>
            <tbody id="actor">
            {
              
              this.props.buckets.map((bucket) => {
                return this.buildRow(bucket)
              })
            }
            </tbody>
          </table>
        </div>
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
