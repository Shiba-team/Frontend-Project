import React, { Component } from 'react'
import {createBucketApi, getBucketInfoApi} from './../../DAL/api'


class MinioCreateBucket extends Component{

    constructor(props){
        super(props)

        this.createBucket = () => {
            const bucketName = document.querySelector('#createBucket').value

            createBucketApi(
                this.props.userInfo.userId,
                this.props.userInfo.loginToken,
                bucketName
            ).then((data) => {
                getBucketInfoApi(
                    this.props.userInfo.userId,
                    this.props.userInfo.loginToken,
                    data.bucketId
                ).then(bucket => {
                    this.props.addBucket(bucket)
                })
            })
        }
    }

    render(){
        return (
            <div>
                <h4>Create bucket</h4>
                <input type="text" name="createBucket" id="createBucket" />
                <button onClick={this.createBucket}>Create bucket</button>
            </div>
        )
    }
}

export default MinioCreateBucket