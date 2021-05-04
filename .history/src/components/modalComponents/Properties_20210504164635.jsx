import React, { Component } from "react";
import { Fade } from '@material-ui/core';
import faker from "faker";

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
    }

    buildRow = (user)=>{
      return (<tr>
        <td> </td>
        <td>
          <div className="row justify-content-center ">
            <div className="custom-control custom-checkbox col-4 ">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1_{{actor_id}}"
                name="example1_{{actor_id}}"
              />
              <label
                className="custom-control-label"
                for="customCheck1_{{actor_id}}"
              >
                Read
              </label>
            </div>
            <div className="custom-control custom-checkbox col-4 ">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck2_{{actor_id}}"
                name="example2_{{actor_id}}"
              />
              <label
                className="custom-control-label"
                for="customCheck2_{{actor_id}}"
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
                id="customCheck3_{{actor_id}}"
                name="example3_{{actor_id}}"
              />
              <label
                className="custom-control-label"
                for="customCheck3_{{actor_id}}"
              >
                Read
              </label>
            </div>
            <div className="custom-control custom-checkbox col-4 ">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck4_{{actor_id}}"
                name="example4_{{actor_id}}"
              />
              <label
                className="custom-control-label"
                for="customCheck4_{{actor_id}}"
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
                            <table
                              id="sort2"
                              className="table table-hover w-100"
                            >
                              <thead>
                                <tr className="bg-info text-white">
                                  <th> Username </th> <th> Object </th>
                                  <th> Object Permissions </th>
                                </tr>
                              </thead>
                              <tbody id="actor_container">
                                
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