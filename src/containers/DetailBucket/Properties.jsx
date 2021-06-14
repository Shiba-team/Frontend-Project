import React from "react";
import { Link } from 'react-router-dom'

class Properties extends React.Component {
  render() {
    return (
      <div className="properties">
        <div className="d-flex mt-4 mb-4">
          <button className="btn btn-primary mr-3">Open</button>
          <button className="btn btn-primary mr-3">Download</button>
          <button className="btn btn-primary mr-3">Make public</button>
          <button className="btn btn-primary mr-3">Copy path</button>
        </div>

        <div className="label">Owner</div>
        <div className="value">f09das8a998s9as99</div>

        <div className="label">File name</div>
        <div className="value">VMware vsphere SRM.jpg</div>

        <div className="label">Last modified</div>
        <div className="value">30/04/2021</div>

        <div className="label">Size</div>
        <div className="value">15.6 KB</div>

        <div className="label">Link</div>
        <div className="value">
          <Link href='#'>
            https://s3.ap-south-1.amazonaws.com/unixarena/VMware+vsphere+SRM.jpg
          </Link>
        </div>
      </div>
    );
  }
}

export default Properties;
