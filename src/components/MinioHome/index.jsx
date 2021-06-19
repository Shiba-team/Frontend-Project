import React, {Component} from 'react'
import MinioBucketList from './../MinioBucketList'
import MinioCreateBucket from './../MinioCreateBucket'
import MinioObjectList from '../MinioObjectList'

class MinioHome extends Component {
    render(){
        return (
            <div>
                <MinioBucketList 
                    userBuckets={this.props.userBuckets}
                    getUserBuckets={this.props.getUserBuckets}
                    selectBucket={this.props.selectBucket}
                />

                <MinioCreateBucket
                    createBucket={this.props.createBucket}
                />

                <MinioObjectList
                    currentBucket={this.props.currentBucket}
                    currentFolder={this.props.currentFolder}
                    selectFolder={this.props.selectFolder}
                    selectFile={this.props.selectFile}
                    deleteFolder={this.props.deleteFolder}
                    deleteFile={this.props.deleteFile}
                    downloadFolder={this.props.downloadFolder}
                    downloadFile={this.props.downloadFile}
                />
            </div>
        )
    }
}

export default MinioHome