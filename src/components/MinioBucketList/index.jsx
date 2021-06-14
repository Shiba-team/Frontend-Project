import React, {Component} from 'react'
import {getBucketIdApi, getBucketInfoApi} from './../../DAL/api'

class MinioBucketList extends Component {

    constructor(props){
        super(props)
        this.state = {
            bucketIds: []
        }

        this.getBucketIds = () => {
            return getBucketIdApi(this.props.userInfo.userId, this.props.userInfo.loginToken)
        }

        this.getBuckets = () => {
            this.getBucketIds()
            .then((bucketIds) => {
                const promises = []

                for(let bucketId of bucketIds){
                    promises.unshift(getBucketInfoApi(this.props.userInfo.userId, this.props.userInfo.loginToken, bucketId))
                }

                Promise.all(promises)
                .then((value) => {
                    this.props.updateBucketList(value)
                })
            })
        }

        this.selectBucket = (bucketId) => {
            const buckets = this.props.buckets.filter(bucket => bucket.id === bucketId)
            if(buckets.length > 0){
                this.props.updateCurrentBucket(buckets[0])
            }
        }
    }

    componentDidMount(){
        this.getBuckets()
    }


    render(){
        return (
            <div>
                <h4>Bucket list</h4>
                <ul>
                    {this.props.buckets.map((bucket) => (
                        <li 
                            key={bucket.name}
                            onClick={() => this.selectBucket(bucket.id)} 
                        >{bucket.name}</li>
                    ))}
                </ul>
            </div>
        )
    }
}
                        

export default MinioBucketList