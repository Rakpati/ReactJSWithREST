import React, { Component } from 'react'
import ApiService from "../../service/ApiService";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class EditUserComponent extends Component {

    constructor(props){
        super(props);
        this.state ={
            id: '',
            firstName: '',
            lastName: '',
            age: '',
            salary: '',
        }
        this.saveUser = this.saveUser.bind(this);
        this.loadUser = this.loadUser.bind(this);
    }

    componentDidMount() {
        this.loadUser();
    }

    loadUser() {
        ApiService.fetchUserById(window.localStorage.getItem("userId"))
            .then((res) => {
                let user = res.data.result;
                this.setState({
                id: user.id,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                age: user.age,
                salary: user.salary,
                })
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    saveUser = (e) => {
        e.preventDefault();
        let user = {id: this.state.id, password: this.state.password, firstName: this.state.firstName, lastName: this.state.lastName, age: this.state.age, salary: this.state.salary};
        ApiService.editUser(user)
            .then(res => {
                this.setState({message : 'User added successfully.'});
                this.props.history.push('/users');
            });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Edit User</h2>
                <form>

                    <div className="form-group">
                        <TextField id="standard-basic" label="username" value={this.state.username} onChange={this.onChange} />
                    </div>

                    <div className="form-group">
                        <TextField id="standard-basic" label="firstName" value={this.state.firstName} onChange={this.onChange} />
                    </div>

                    <div className="form-group">
                        <TextField id="standard-basic" label="lastName" value={this.state.lastName} onChange={this.onChange} />
                    </div>

                    <div className="form-group">
                        <TextField id="standard-basic" type="number" label="age" value={this.state.age} onChange={this.onChange} />
                    </div>

                    <div className="form-group">
                      <TextField id="standard-basic" label="salary" type="number" value={this.state.salary} onChange={this.onChange} />
                    </div>

                    <Button variant="contained" color="primary" onClick={this.saveUser}> Save</Button>
                </form>
            </div>
        );
    }
}

export default EditUserComponent;