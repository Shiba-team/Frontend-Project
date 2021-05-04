import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import ProgressBar from 'react-bootstrap/ProgressBar'
import Bucket from "./modalComponents/Bucket";
import Properties from "./modalComponents/Properties";
import Review from "./modalComponents/Review";

class ModalForm extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    step: 1,
    bucketName: '',
    selection: '',
    prog: 33,
    itemActive: 1,
}

nextStep = () => {
    const { step } = this.state
    const { prog } = this.state
    const {itemActive} = this.state
    this.setState({
        step : step + 1,
        prog: prog+33,
        itemActive: itemActive+1,
    })
}

prevStep = () => {
    const { step } = this.state
    const { prog } = this.state
    const {itemActive} = this.state
    this.setState({
        step : step - 1,
        prog: prog - 33,
        itemActive: itemActive-1,
    })
}

handleChange = input => event => {
    this.setState({ [input] : event.target.value })
}

handlePage = () => {
  const {step} = this.state;
  const { bucketName, selection } = this.state;
  const values = { bucketName, selection };
  console.log(step + values)
  switch(step) {
    default:
      return <h1>User Forms not working. Enable Javascript!</h1>;
    case 1:
        return <Bucket
                nextStep={this.nextStep()}
                handleChange = {this.handleChange}
                values={values}
                />;
    case 2:
        return <Properties
                nextStep={this.nextStep()}
                prevStep={this.prevStep}
                handleChange = {this.handleChange}
                values={values}
                />;
                
    case 3:
        return <Review
                nextStep={this.nextStep()}
                prevStep={this.prevStep}
                values={values}
                />;
                
  }           
}

  render() {
         
    return (
      <div>
      <Modal
        show={this.props.showModal}
        onHide={this.props.close}
        size="xl"
        id="largeModal"
      >
          <div className="modal-content border-0">
            <Modal.Body>
              <div className="container-fluid">
                <div className="row justify-content-center">
                  <div className="col-11 col-sm-9 col-md-7 col-lg-6 text-center p-0 mt-3 mb-2">
                    <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
                      <h2 id="heading"> Create bucket </h2>
                      <p> Fill all form field to go to next step </p>
                      <form id="msform" method="POST">
                        <ul id="progressbar">
                          <li className="active" id="bucket">
                            <strong> Bucket </strong>
                          </li>
                          <li className = { this.state.itemActive >= 2 ? 'active' : '' } id="properties">
                            <strong> Properties </strong>
                          </li>
                          <li className={this.state.itemActive >= 3 ? 'active' : '' } id="confirm">
                            <strong> Review </strong>
                          </li>
                        </ul>
                        <ProgressBar animated now={this.state.prog} />
                        <br />
                        
                        {this.handlePage()}
                        
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </Modal.Body>
          </div>
      </Modal>
      </div>
    );
}}
export default ModalForm;
