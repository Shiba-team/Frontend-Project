import React, { Component } from 'react'

class MinioFile extends Component{
    render(){
        return (
            <div>
                <span>name: {this.props.file.name}</span>
                <span>size: {this.props.file.size}</span>
                <span>last modified: {this.props.file.lastModified}</span>
            </div>
        )
    }
}

export default MinioFile