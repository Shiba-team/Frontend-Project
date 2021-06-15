import React, {Component} from 'react'
import { getFolderContentApi } from './../../DAL/api'

class MinioBucketItems extends Component{

    constructor(props){
        super(props)
        this.state = {
            currentBucketId: undefined,
            currentFolderId: undefined,
            folders: [],
            files: []
        }

        this.getFolderContent = (folderId) => {
            getFolderContentApi(
                this.props.userInfo.userId,
                this.props.userInfo.loginToken,
                this.props.currentBucket.id, 
                folderId
            ).then((data) => {
                this.setState({
                    currentBucketId: this.props.currentBucket.id,
                    currentFolderId: folderId,
                    folders: data.folderIds,
                    files: data.objectIds
                })
            })
            
        }
    }

    render(){
        if(this.props.currentBucket === undefined){
            return (
                <div>
                    <h4>No bucket selected</h4>
                    <p>Click on the bucket to see it's content</p>
                </div>
            )
        }

        if(this.props.currentBucket.id !== this.state.currentBucketId){
            this.getFolderContent(this.props.currentBucket.rootFolderId)
        }

        return (
            <div>
                <h4>File and folder</h4>
                <h5>Folder</h5>
                <ul>
                    {this.state.folders.map(folderId => {
                        return (
                            <li key={folderId}>{folderId}</li>
                        )
                    })}
                </ul>
                <h5>File</h5>
                <ul>
                    {this.state.files.map(fileId => {
                        return (
                            <li key={fileId}>{fileId}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default MinioBucketItems