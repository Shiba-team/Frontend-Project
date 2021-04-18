import React from 'react'

class SetProperties extends React.Component{

    constructor(props){
        super(props)

        this.handleFormChange = () => {
            const form = document.querySelector('#UploadPage-setProperties-form')

            this.props.setPermissions({
                object: form.object.value,
				objectPermistion: form.objectPermissions.value,
				publicPermission: form.publicPermissions.value
            })
        }
    }


    render(){
        return (
            <form name="setProperties" onChange={this.handleFormChange} className="UploadPage-setProperties-form" id="UploadPage-setProperties-form">
                <p>Manage users</p>
                <div className="UploadPage-setProperties-columnName">
                    <span>User ID</span>
                    <span>Object</span>
                    <span>Object permissions</span>
                </div>
                <div className="UploadPage-setProperties-radioSelect">
                    <span>{this.props.owner}(owner)</span>
                    <span>
                        <input type="radio" name="object" id="objectRead" value="read" defaultChecked/>
                        <label htmlFor="objectRead">Read</label>
                        <input type="radio" name="object" id="objectWrite" value="write"/>
                        <label htmlFor="objectWrite">Write</label>
                    </span>
                    <span>
                        <input type="radio" name="objectPermissions" id="objectPermissionsRead" value="read" defaultChecked/>
                        <label htmlFor="objectPermissionsRead">Read</label>
                        <input type="radio" name="objectPermissions" id="objectPermissionsWrite" value="write"/>
                        <label htmlFor="objectPermissionsWrite">Write</label>
                    </span>
                </div>
                <p>Manage public permissions</p>
                <div className="UploadPage-setProperties-permissions">
                    <select name="publicPermissions" id="cars">
                        <option value="false" defaultValue>Do not allow public access (Recommended)</option>
                        <option value="true">Allow public access</option>
                    </select>
                </div>
            </form>
        )
    }
}

export default SetProperties;