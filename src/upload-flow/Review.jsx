import React from 'react'

class Review extends React.Component{
    render(){

        const nFile = this.props.files.length
        const totalSize = this.props.files.reduce((total, file) => total + file.size, 0)

        return (
            <div className="UploadFile-review-wrapper">
                <p>Files</p>
                <div className="UploadFile-review-files">
                    <span>{nFile} File</span>
                    <span>Size: {totalSize} Bytes</span>
                </div>
                <p>Properties</p>
                <div className="UploadFile-review-properties">
                    <span>1 Grantess</span>
                </div>
            </div>
        )
    }
}

export default Review