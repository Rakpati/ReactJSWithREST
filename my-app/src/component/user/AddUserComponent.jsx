import React, { Component } from 'react'
import ApiService from "../../service/ApiService";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class AddUserComponent extends Component{

    constructor(props){
        super(props);
        this.state ={
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            age: '',
            salary: '',
            message: null
        }
        this.saveUser = this.saveUser.bind(this);
    }

    saveUser = (e) => {
        
        e.preventDefault();
        let user = {username: this.state.username, password: this.state.password, firstName: this.state.firstName, lastName: this.state.lastName, age: this.state.age, salary: this.state.salary};
        ApiService.addUser(user)
            .then(res => {
                this.setState({message : 'User added successfully.'});
                this.props.history.push('/users');
            });
    }

    _handleTextFieldChange = (e) =>
        this.setState({ textFieldValue: e.target.value });

    render() {
        return(
            <div>
                <h2 className="text-center">Add User</h2>
                <form>
                <div className="form-group"> 
                <TextField id="standard-basic"
                        inputRef={(input) => this.state.username = input }
                        label="Name"/>                   
                </div>

                <div className="form-group">
                    <TextField id="standard-basic" type="password" label="password" 
                                            inputRef={(input) => this.state.password = input} />
                </div>

                <div className="form-group">
                    <TextField id="standard-basic" label="firstName" inputRef={(input) => this.state.firstName = input} />
                </div>

                <div className="form-group">
                    <TextField id="standard-basic" label="lastName" inputRef={(input) => this.state.lastName = input}/>
                </div>

                <div className="form-group">
                    <TextField id="standard-basic" type="number" label="age" inputRef={(input) => this.state.age = input} />
                </div>

                <div className="form-group">
                    <TextField id="standard-basic" type="number" label="salary" inputRef={(input) => this.state.salary = input} />
                </div>
                {this.state.username}            
                <Button variant="contained" color="primary" onClick={this.saveUser}>  Save</Button>
            </form>
    </div>
        );
    }
}

export default AddUserComponent;