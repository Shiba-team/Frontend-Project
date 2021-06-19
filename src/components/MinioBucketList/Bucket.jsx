import React, {Component} from 'react'
import bucketIcon from './../../assets/icons/bucket.png'

class Bucket extends Component{

    constructor(props){
        super(props)

        this.selectBucket = () =>{
            this.props.selectBucket(this.props.bucket.id)
        }
    }

    render(){
        return (
            <div onClick={this.selectBucket}>
                <p><img width='25px' src={bucketIcon}/>{this.props.bucket.name}</p>
            </div>
        )
    }
}

export default Bucket