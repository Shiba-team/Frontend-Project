import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="banner">
          <div className="title">Shiba Management</div>
          <div className="subtitle">
            Everything you need is access and manage your data - in one web
            interface
          </div>
        </div>

        <div className="container">
          <div className="intro">Explore more</div>

          <div className="row">
            <div className="col-md-3">
              <div className="content">
                <div className="label">Title 1</div>
                <div className="description">
                  Deploy production-ready SAP landscape in allignment...
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="content">
                <div className="label">Title 2</div>
                <div className="description">
                  Deploy production-ready SAP landscape in allignment...
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="content">
                <div className="label">Title 3</div>
                <div className="description">
                  Deploy production-ready SAP landscape in allignment...
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="content">
                <div className="label">Title 4</div>
                <div className="description">
                  Deploy production-ready SAP landscape in allignment...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
