import React, { Component } from 'react';
import axios from 'axios';
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            name: '',
            username: '',
            email: '',
            age: ''
        }

        this.submitData = this.submitData.bind(this);
        this.nameChanged = this.nameChanged.bind(this);
        this.deleteRow = this.deleteRow.bind(this);
    }

    //     componentDidMount(){
    //         axios.get(`https://jsonplaceholder.typicode.com/users/1`)
    //       .then(res => {
    //     const persons = res.data;
    //     console.log('bf',persons)
    //   })
    //     }
    componentDidMount() {

        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                const persons = res.data;
                console.log('persons', persons)
            })
    }


    nameChanged(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    // componentWillUpdate(){
    //     axios.post(`https://jsonplaceholder.typicode.com/users`,)
    //     .then(res => {
    //       console.log(res);
    //       console.log(res.data);
    //     })
    // }



    submitData(event, value) {
        event.preventDefault();
        let items = [...this.state.items];
        if (this.state.name == "" && this.state.username == "" && this.state.email == ""
            && this.state.age == "" && this.state.dec == "") {

        }
        else {
            this.state.items.push(
                {
                    name: this.state.name,
                    username: this.state.username,
                    email: this.state.email,
                    age: this.state.age,
                    dec: this.state.dec
                }

            );
            axios({
                method: 'post',
                url: 'https://jsonplaceholder.typicode.com/users',
                data: {
                    name: this.state.name,
                    username: this.state.username,
                    email: this.state.email,
                }
            })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        this.setState({
            items: this.state.items,
            persons: this.state.persons,
            data: this.state.data,
        })
        console.log('persons', this.state.persons)
    }
    reset = () => {
        this.setState({ name: '', email: '', age: '', dec: '', username: '' })
    }

    deleteRow = (index) => {

        this.state.items.splice(index, 1);
        this.setState({
            items: this.state.items
        })
    }


    render() {
        this.state.items.map((items) => <th>{items}</th>);
        console.log('items', this.state.items)
        return (
            <React.Fragment>
                <div>
                    <form >
                        <lable>
                            Name:
                   <input type="text" name='name' onChange={(e) => this.nameChanged(e)} value={this.state.name} />
                        </lable><br /><br />
                        <lable>
                            Username:
                   <input type="text" name='username' onChange={(e) => this.nameChanged(e)} value={this.state.username} />
                        </lable><br /><br />
                        <lable>
                            Email:
                   <input type="text" name='email' onChange={(e) => this.nameChanged(e)} value={this.state.email} />
                        </lable><br /><br />
                        <lable>
                            Age:
                   <input type="text" name='age' onChange={(e) => this.nameChanged(e)} value={this.state.age} />
                        </lable><br /><br />
                        <lable>
                            Dec:
                   <textarea type="textarea" name='dec' onChange={(e) => this.nameChanged(e)} value={this.state.dec} />
                        </lable><br /><br />
                        <button type="button" onClick={this.submitData}>Submit</button>
                        <button type="reset" onClick={() => this.reset()} >reset</button>
                    </form>
                    <br />
                    <br />
                </div>
                {this.state.items && this.state.items.length > 0 &&
                    <div>
                        <table border="1px">
                            <tr>
                                <td>Index</td>
                                <td>Name</td>
                                <td>Username</td>
                                <td>Email</td>
                                <td>Age</td>
                                <td>Dec</td>
                                <td>Action</td>
                            </tr>
                            {
                                this.state.items && this.state.items.length > 0 && this.state.items.map((value, index) => {
                                    console.log('dat', value)
                                    return (
                                        <>
                                            <tr>
                                                <td>{index}</td>
                                                <td>{value.name}</td>
                                                <td>{value.username}</td>
                                                <td>{value.email}</td>
                                                <td>{value.age}</td>
                                                <td>{value.dec}</td>
                                                <td><button type="button" onClick={() => this.deleteRow(index)} style={{ backgroundColor: "#C0284D" }}> Delete </button></td>
                                                <br /><br />
                                            </tr>
                                        </>
                                    )
                                })
                            }
                        </table>
                    </div>
                }
            </React.Fragment>
        )
    }
}
export default Form;