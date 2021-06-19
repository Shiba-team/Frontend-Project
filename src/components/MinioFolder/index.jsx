import React, { Component } from 'react'
import { getFolderContentApi } from './../../DAL/api'

class MinioFolder extends Component{

    constructor(props){
        super(props)

    }
    render(){
        return (
            <div>
                <span>{this.props.folder.name}</span>
                <button>Download</button>
                <button>Delete</button>    
            </div>
        )
    }
}

export default MinioFolder