import React, {Component} from 'react'
import { getFolderContentApi } from './../../DAL/api'
import MinioFolder from './../MinioFolder'
import MinioFile from './../MinioFile'

class MinioBucketItems extends Component{

    render(){
        if(this.props.currentBucket === undefined){
            return (
                <div>
                    <h4>No bucket selected</h4>
                    <p>Click on the bucket to see it's content</p>
                </div>
            )
        }

        if(this.props.currentFolder === undefined){
            return (
                <div>
                    <h4>Folder empty</h4>
                </div>
            )
        }

        return (
            <div>
                <h4>File and folder</h4>
                <h5>Folder</h5>
                {this.props.currentFolder.folders.map(folder => {
                    return (
                        <MinioFolder key={folder.id} folder={folder} />
                    )
                })}
                <h5>File</h5>
                {this.props.currentFolder.files.map(file => {
                    return (
                        <MinioFile key={file.id} file={file} />
                    )
                })}
            </div>
        )
    }
}

export default MinioBucketItems