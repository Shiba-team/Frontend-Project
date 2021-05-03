import { Fade } from "@material-ui/core";
import React, { Component } from "react";

class Review extends Component {
    next = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }   
    managePermission = input =>{
        if (input==='1')
            return "Do not grant public read access to this bucket (Recommended)";
        else if (input==='2')
        return "Grant public read access to this bucket (Not recommended)";
        else if (input==='3')
        return " Decide later";
        else return "";
    }

    render(){
        const { values } = this.props;
        return(
            <fieldset>
                <Fade in={true} timeout={1000}>
                    <div>
                          <div className="form-card">
                            <div className="row">
                              <div className="col-7">
                                <h2 className="fs-title"> Review: </h2>
                              </div>
                              <div className="col-5">
                                <h2 className="steps"> Step 3 - 3 </h2>
                              </div>
                            </div>
                            <br />
                            <h4 className="purple-text border-bottom border-secondary pb-2">
                              Name
                            </h4>
                            <div className="row">
                              <div className="fieldlabels col-3">
                                Bucket name: 
                              </div>
                              <div
                                className="fieldlabels col-9"
                                name="bnameReview"
                              >{values.bucketName}</div>
                            </div>
                            <br />
                            <h4 className="purple-text border-bottom border-secondary pb-2">
                              Properties
                            </h4>
                            <div className="row">
                              <div className="fieldlabels col-4">Users:</div>
                              <div
                                className="col-8 fieldlabels"
                                name="usersReview"
                              >
                                1
                              </div>
                            </div>
                            <div className="row">
                              <div className="fieldlabels col-4">
                                Manage permission: 
                              </div>
                              <div
                                className="col-8 fieldlabels"
                                name="permReview"
                              >{this.managePermission(values.selection)}</div>
                            </div>
                          </div>
                          <input
                            type="submit"
                            id="submit"
                            name="submit"
                            className="submit action-button"
                            value="Accept"
                          />
                          <input
                            type="button"
                            name="previous"
                            id="previous2"
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
export default Review;