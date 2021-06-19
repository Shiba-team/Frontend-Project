import React, {Component} from 'react'
import {getBucketIdApi, getBucketInfoApi, getFolderContentApi} from './../../DAL/api'
import Bucket from './Bucket'

class MinioBucketList extends Component {


    componentDidMount(){
        this.props.getUserBuckets()
    }
    
    render(){
        return (
            <div>
                <h4>Bucket list</h4>
                <div>
                    {this.props.userBuckets.map((bucket) => (
                        <Bucket
                            key={bucket.name}
                            bucket={bucket}
                            selectBucket={this.props.selectBucket} 
                        />
                    ))}
                </div>
            </div>
        )
    }
}
                        

export default MinioBucketList