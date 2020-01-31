import React, { Component } from 'react';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Button, Row, Col, Table } from 'reactstrap';
import LaddaButton, { SM, SLIDE_UP, expZoomIn } from 'react-ladda';
import axios from 'axios';
class AvFields extends Component {
  constructor(props) {
    super(props);
    this.state = {
    //  url:'https://jsonplaceholder.typicode.com/users',
      data: [],
      email: '',
      text: '',
      number: '',
      step: '',
      loading: false,
      users:[],
      selectInput:'',
      searchKey:''

      
    }
  }

componentDidMount(){

axios({
  url:`https://jsonplaceholder.typicode.com/users`,
  method: "post",
  users:{
    email: this.state.email,
    text: this.state.text,
    step: this.state.step,
    number: this.state.number
  }
}).then(function (response) {
  console.log('mmmm',response);
})
.catch(function (error) {
  console.log(error);
});    
console.log("users",this.state.users)}

  stop() {
    this.setState({
      loading: false,
      tableShow:true
    })
  }
  handelChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSelectChange = (event)=>{
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSearchChange = (event)=>{
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  searchData =(event) =>{
    event.preventDefault();
    var selectData = this.state.selectInput;
    var uniqueKey = this.state.searchKey;
    var Output = this.state.data.filter(function (input) {
        console.log(input.name, 'uniqueKey', typeof uniqueKey)
        if ('name' === uniqueKey) {
            return input.email === selectData
        } else {
            return input.name === selectData
        }
    })
    if (Output && Output.length > 0) {
        this.setState({

            data: Output
        });
    } 
  }
  submitData = (event) => {
    event.preventDefault();
    setTimeout(() => {
      // this.setState({tableShow:true})
       this.state.data.push ({
        email: this.state.email,
        text: this.state.text,
        step: this.state.step,
        number: this.state.number,        
      });
      this.stop()
    }, 3000)
    this.setState ({
      email: this.state.email,
      text: this.state.text,
      step: this.state.step,
      number: this.state.number,
      loading: !this.state.loading,
      progress: 1,
      data:this.state.data

    });axios({
      
      method: 'post',
      url: 'https://jsonplaceholder.typicode.com/users',
      data: {
        email: this.state.email,
        text: this.state.text,
        step: this.state.step,
        number: this.state.number,
        }
    })
    .then(function (response) {
      console.log('input',response);
    })
    .catch(function (error) {
      console.log(error);
    });    
    console.log("email",this.state.data)
  }

  render() {
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Av Fields Examples</h1>
        <AvForm onValidSubmit={this.submitData}>
          <Col md={12}>
            <Row>
              <Col md={6}>
                <AvField name="email" label="Email Address"
                  type="email" onChange={this.handelChange} value={this.state.name} errorMessage={`${this.state.name === "" ? 'email not valid' : 'Plss Enter Your Email..' } `}  required />
              </Col>
              <Col md={6}>
                <AvField name="text" label="Only Upper case" onChange={this.handelChange} type="text" pattern="^[A-Z]*$" errorMessage=" Plss Use Only UpperCase Letters.." value={this.state.name} required />
              </Col>
              <Col md={6}>
                <AvField name="number" label="number" onChange={this.handelChange} type="text" validate={{ number: true }} errorMessage="The number length should be more than 5 and less than 10 " value={this.state.name} minLength={5} maxLength={10} required />
              </Col>
              <Col md={6}>
                <AvField name="step" label="step" onChange={this.handelChange} type="number" step="5" value={this.state.name} errorMessage="Plss Enter value that should divisible by 5" required />
              </Col>
            </Row>
          </Col>

          <LaddaButton style={{marginLeft:'46%'}}
            loading={this.state.loading}
            onValidSubmit={this.submitData}
            data-color="#eee"
            data-size={SM}
            data-spinner-size={30}
            data-spinner-color="#ddd"
            data-spinner-lines={12}
            data-spinner-osilation={2}
          > Click Here! </LaddaButton>
          <br></br><br></br>
          {this.state.data && this.state.data.length >0&&(
        <div>
          <AvForm >
          <Col md="12">
          <Row>
          <Col md={4}><AvField col="4" name="selectInput" value={this.state.select}  onChange={e => this.handleSearchChange(e)} type = "select">
            <option value="Select"> Select </option>
            <option value="Email"> Email </option>
            <option value="Name"> Name </option>
          </AvField></Col>
          <Col md={4}><AvField col="4" name="searchKey" type="text" value={this.state.name}  onChange={e => this.handleChange} ></AvField></Col>
          <Col md={4}> <Button col="4" onClick={this.searchData}>Search</Button></Col>
          </Row>
          </Col>
          </AvForm>

          <Table border="1px solid black">
            <thead>
              <tr style={{backgroundColor:'#34495E',color:'white',textAlign:'center'}}>
                <th>#</th>
                <th>Email</th>
                <th>Name (Upper case)</th>
                <th>Number</th>
                <th>Step</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data &&
              this.state.tableShow &&
              this.state.data.length > 0 &&
              this.state.data.map((value,index) => {
                  return (
                    <tr style={{textAlign:'center'}}>
                      <th scope = "row" > { index } </th>
                      <td>{value.email}</td>
                      <td>{value.text}</td>
                      <td>{value.number}</td>
                      <td>{value.step}</td>
                    </tr>
                  )
                })}
            </tbody>
          </Table>
        </div>
            
          )}
        </AvForm>
      </div>
    )
  }
}
export default AvFields;
