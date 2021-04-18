import React from 'react'

class Header extends React.Component{


    render() {
        return (
            <div className="UploadPage-header">
                <h1>Upload</h1>
                <ul>
                    <li className={this.props.currentStep === 'upload file' ? "UploadPage-header-boldText" : ""}>1. Select file</li>
                    <li className={this.props.currentStep === 'set properties' ? "UploadPage-header-boldText" : ""}>2. Set properties</li>
                    <li className={this.props.currentStep === 'review' ? "UploadPage-header-boldText" : ""}>3. Review</li>
                </ul>
            </div>
        )
    }
}

export default Header