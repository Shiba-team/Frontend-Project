import React, {Component} from 'react'
import MinioBucketList from './../MinioBucketList'
import MinioCreateBucket from './../MinioCreateBucket'
import MinioBucketItems from './../MinioBucketItems'

class MinioHome extends Component {
    render(){
        return (
            <div>
                <MinioBucketList 
                    userInfo={this.props.userInfo} 
                    buckets={this.props.buckets}
                    updateBucketList={this.props.updateBucketList}
                    updateCurrentBucket={this.props.updateCurrentBucket}
                />

                <MinioCreateBucket
                    userInfo={this.props.userInfo}
                    addBucket={this.props.addBucket}
                />

                <MinioBucketItems
                    userInfo={this.props.userInfo}
                    currentBucket={this.props.currentBucket}
                />
            </div>
        )
    }
}

export default MinioHome