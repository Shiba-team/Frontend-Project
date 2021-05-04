import React, { Component } from "react";
import { Fade } from '@material-ui/core';
import faker from "faker";


//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery';

class Properties extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [],
    }
  }
    
    next = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    componentDidMount() {
      let listUsers = this.state.users;
      for (let i = 0; i < 25; i++)
      {
        const user = {
          userName: faker.name.findName(),
        }
        listUsers.push(user);
      }
      this.setState({
        users: listUsers,
      })
      $(document).ready(function () {
        $("#sort2").DataTable({
          scrollX: false,
          bAutoWidth: false,
          scrollY: "200px",
          scrollCollapse: true,
          aoColumns: [{ sWidth: "28%" }, { sWidth: "36%" }, { sWidth: "36%" }],
          iDisplayLength: 3,
          info: false,
          searching: false,
          bLengthChange: false,
          dom:
            '<"top">rt<"bottom"<"row"<"col-3 mt-1 pull-left"f><"col-9"p>>><"clear">',
        });
      });
    }

    buildRow = (user, id)=>{
      return (<tr>
        <td> {user.userName} </td>
        <td>
          <div className="row justify-content-center ">
            <div className="custom-control custom-checkbox col-4 ">
              <input
                type="checkbox"
                className="custom-control-input"
                id={"customCheck1_"+ id}
                name={"example1_" + id}
              />
              <label
                className="custom-control-label"
                for={"customCheck1_"+id}
              >
                Read
              </label>
            </div>
            <div className="custom-control custom-checkbox col-4 ">
              <input
                type="checkbox"
                className="custom-control-input"
                id={"customCheck2_"+id}
                name={"example2_"+id}
              />
              <label
                className="custom-control-label"
                for={"customCheck2_"+id}
              >
                Write
              </label>
            </div>
          </div>
        </td>
        <td>
          <div className="row justify-content-center ">
            <div className="custom-control custom-checkbox col-4 ">
              <input
                type="checkbox"
                className="custom-control-input"
                id={"customCheck3_"+id}
                name={"example3_"+id}
              />
              <label
                className="custom-control-label"
                for={"customCheck3_"+id}
              >
                Read
              </label>
            </div>
            <div className="custom-control custom-checkbox col-4 ">
              <input
                type="checkbox"
                className="custom-control-input"
                id={"customCheck4_"+id}
                name={"example4_"+id}
              />
              <label
                className="custom-control-label"
                for={"customCheck4_"+id}
              >
                Write
              </label>
            </div>
          </div>
        </td>
      </tr>
      );
    }

    render(){
        const { values } = this.props;
        return(
            <fieldset>
                <Fade in = {true} timeout={1000}>
                    <div>
                          <div className="form-card">
                            <div className="row">
                              <div className="col-7">
                                <h2 className="fs-title">Bucket Properties</h2>
                              </div>
                              <div className="col-5">
                                <h2 className="steps"> Step 2 - 3 </h2>
                              </div>
                            </div>
                            <label className="fieldlabels">Manage user:</label>
                            <table id="sort2"
                              className="table table-hover w-100"
                            >
                              <thead>
                                <tr className="bg-info text-white">
                                  <th> Username </th> <th> Object </th>
                                  <th> Object Permissions </th>
                                </tr>
                              </thead>
                              <tbody id="actor_container">
                                {
                                  this.state.users.map((user, id) => {
                                    return this.buildRow(user,id);
                                  })
                                }
                              </tbody>
                            </table>
                            <label className="fieldlabels">
                              Manage public permissions:
                            </label>
                            <select
                              className="custom-select"
                              id="selectDropdown"
                              onChange={this.props.handleChange('selection')}
                              defaultValue={values.selection}
                            >
                              <option selected> Select Option </option>
                              <option value="1">
                                Do not grant public read access to this
                                bucket(Recommended)
                              </option>
                              <option value="2">
                                Grant public read access to this bucket(Not
                                recommended)
                              </option>
                              <option value="3"> Decide later </option>
                            </select>
                          </div>
                          <input
                            type="button"
                            name="next"
                            className="next action-button"
                            value="Next"
                            onClick={this.next}
                          />
                          <input
                            type="button"
                            name="previous"
                            id="previous1"
                            className="previous action-button-previous"
                            value="Previous"
                            onClick={this.back}
                          />
                          </div>
                          </Fade>
                        </fieldset>
        )
}
}
export default Properties;