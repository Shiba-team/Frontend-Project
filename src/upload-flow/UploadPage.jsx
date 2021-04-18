import React from 'react'
import Header from './Header'
import Review from './Review'
import SelectFile from './SelectFile'
import SetProperties from './SetProperties'

class UploadPage extends React.Component{
	
	constructor(props){
		super(props)
		this.state = {
			owner: 'test_user',
			step: ['upload file', 'set properties', 'review'],
			backtrack: [],
			files: [
				{
					name: 'file 1',
					size: 14
				}, 
				{
					name: 'file 2',
					size: 25
				}
			],
			permissions: {
				object: 'read',
				objectPermistion: 'read',
				publicPermission: false
			}
		}
		
		this.nextStep = () => {

			if(this.state.step[0] === 'review'){
				return
			}

			if(this.state.step.length <= 1){
				return
			}

			this.setState((state) => {
				let step = [...state.step]
				let backtrack = [...state.backtrack]				
				backtrack.unshift(step.shift());
				return {
					step: step,
					backtrack: backtrack
				}
			})
		}

		this.previousStep = () => {
			if(this.state.backtrack.length <= 0){
				return
			}

			this.setState((state) => {
				let step = [...state.step]
				let backtrack = [...state.backtrack]				
				step.unshift(backtrack.shift());
				return {
					step: step,
					backtrack: backtrack
				}
			})
		}
		
		this.addFile = (newFile) => {
			if (this.state.files.some( i => i.name === newFile.name)){
				return
			}
			
			this.setState((state) => {
				return {
					files: [...state.files, newFile]
				}
			})
		}

		this.removeFile = (fileName) => {
			const reducer = (arr, value) => {
				if(value.name !== fileName){
					return [...arr, value]
				}
				else{
					return arr
				}
			}

			this.setState({
				files: this.state.files.reduce(reducer, [])
			})
		}

		this.setPermissions = (newPermissions) => {
			this.setState({
				permissions: newPermissions
			})
		} 

		this.content = () => {
			switch(this.state.step[0]){
				case 'upload file':
					return (
						<SelectFile 
							files={this.state.files} 
							addFile={this.addFile}
							removeFile={this.removeFile}
						/>
					)
				case 'set properties':
					return (
						<SetProperties
							owner={this.state.owner}
							setPermissions={this.setPermissions}
						/>
					) 
				case 'review':
					return (
						<Review
							files={this.state.files}
						/>
					)
				default:
					return <div>default</div>
			}
		}
	}
	
    render() {
		const content = this.content();
        return (
            <div className="UploadPage-wrapper">
                <div className="UploadPage-body">
                    <Header currentStep={this.state.step[0]}/>
                    <div className="UploadPage-content">
						{content}
					</div>
					<div className="UploadPage-navButtons">
						<button onClick={this.previousStep}>Cancel</button>
						<button onClick={this.nextStep}>Next</button>
					</div>
                </div>
            </div>
        )
    }
}

export default UploadPage