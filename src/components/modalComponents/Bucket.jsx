import React, { Component } from "react";
import { Fade } from '@material-ui/core';


class Bucket extends Component {
    next = (e) => {
        e.preventDefault()
        this.props.nextStep()
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
                                <h2 className="fs-title">
                                  Bucket Information:
                                </h2>
                              </div>
                              <div className="col-5">
                                <h2 className="steps"> Step 1 - 3 </h2>
                              </div>
                            </div>
                            <label className="fieldlabels">
                              Bucket name: *
                            </label>
                            <input
                              type="text"
                              name="bname"
                              placeholder="Bucket Name"
                              onChange={this.props.handleChange('bucketName')}
                              defaultValue={values.bucketName}
                            />
                          </div>
                          <input
                            type="button"
                            name="next"
                            className="next action-button"
                            value="Next"
                            onClick={this.next}
                          />
                          </div>
                          </Fade>
                        </fieldset>
        )
}
}
export default Bucket;