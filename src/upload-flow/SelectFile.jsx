import React from 'react'
import imageIcon from './icon/Icon-Image.png'
import xIcon from './icon/Icon-X.png'

class SelectFile extends React.Component {

    constructor(props){
        super(props)

        this.selectFile = () => {
			const inputFile = document.querySelector('#UploadPage-selectFile')
			inputFile.click()	
		}
        
		this.updateFilesList = () => {
			const inputFile = document.querySelector('#UploadPage-selectFile')
			if(inputFile.files.length > 0){
				const fileInfo = inputFile.files[0];
				this.props.addFile({name: fileInfo.name, size: fileInfo.size})
			}
			inputFile.value = ""
		}
    }

    render(){
        return(
			<div className="UploadPage-selectFile-wrapper">
				<div className="UploadPage-selectFile-addFile">
				    <button onClick={this.selectFile}>+ Add more files</button>
				    <input type="file" onChange={this.updateFilesList} id="UploadPage-selectFile" />
			    </div>
			    <div className="UploadPage-selectFile-listFile">
				    {this.props.files.map(i => (
					    <div className="UploadPage-selectFile-fileWrapper" key={i.name}>
					    	<div>
					    		<img src={imageIcon} alt="file icon" />
					    	</div>
					    	<div className="UploadPage-selectFile-fileInfo">
					    		<p className="UploadPage-selectFile-fileName">{i.name}</p>
					    		<p className="UploadPage-selectFile-fileSize">- {i.size} Bytes</p>
					    	</div>
					    	<div className="UploadPage-selectFile-removeFile">
					    		<img src={xIcon} onClick={() => this.props.removeFile(i.name)} alt="remove file icon" />
					    	</div>
					    </div>
				    ))}
			    </div>
		    </div>
        )
    }
}

export default SelectFile