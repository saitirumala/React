import React,{ Component } from "react";
import axios from 'axios';
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      filteredData: [],
      selectInput: "name",
      reCallData: [],
      
    };
    this.inputChanged = this.inputChanged.bind(this);
    this.submitData = this.submitData.bind(this);
    this.searchData = this.searchData.bind(this);
    this.clear = this.clear.bind(this);
    this.selectInputChange = this.selectInputChange.bind(this);
    this.reset=this.reset.bind(this);
  }
  componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res=>{
      const personData = res.data;
      console.log('perosn data',personData)
    })
  }

  inputChanged(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  submitData = event => {
    event.preventDefault();
    const data = [...this.state.data];
    if (
      this.state.name == "" &&
      this.state.username == "" &&
      this.state.email == "" &&
      this.state.age == "" &&
      this.state.phone == ""
    ) {
    } else {
      this.state.data.push({
        name: this.state.name,
        username: this.state.username,
        email: this.state.email,
        age: this.state.age,
        phone: this.state.phone
      });
      axios({
        method: 'post',
        url:'https://jsonplaceholder.typicode.com/users',
        data:{
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
      
    this.setState({
      data: this.state.data,
      reCallData: this.state.data
    });
  };
  }
  selectInputChange = event => {
    this.setState({
      selectInput: event.target.value
    });
  };
  searchData = (event, value) => {
    event.preventDefault();

    // const key = this.state.serach;
    // console.log('key',typeof this.state.data)

    //   if(key===value.name){
    //       filteredData.push(
    //       {
    //             name: value.name,
    //             username:value.username,
    //             email:value.email,
    //             age: value.age,
    //             phone:value.phone
    //       });

    //   }
    //   this.setState({
    //     key: value.name,
    // })

    // this.state.filteredData = this.state.data.filter(name => this.state.data.name==this.state.serachInput);
    // console.log('/this.state.data.filter(name => this.state.data.name==this.state.serachInput)',this.state.data.map(state.name).filter(state.name===this.state.serachInput))

    var seData = this.state.search;
    var key = this.state.selectInput;
    // if(value==this.state.search){
    var final = this.state.data.filter(function(selectInput) {
        console.log(selectInput.name,'key',typeof key)
      if ('name' === key) {
        return selectInput.name === seData
      }else if('username' === key){
        return selectInput.username === seData
      }else{
        return selectInput.email === seData
      }
      // return  {}
      // selectInput.name === seData || selectInput.username === seData || selectInput.email === seData  ;
    });
    if (final && final.length > 0) {
      this.setState({
        data:this.state.reCallData,
        
           data: final });
    } else {
      alert("no data");
    }
    // }
  };
  clear = () => {
    this.setState({
      name: "",
      username: "",
      email: "",
      age: "",
      phone: ""
    });
  };
  reset = (event) =>{
    event.preventDefault();
    this.setState({
        data:this.state.reCallData
    })
  }

  render() {
    // this.state.data.map(data => <th>{data}</th>);
    // console.log('filteredData',this.state.data)
    return (
      <div
        style={{
          border: "2px solid black",
          float: "left",
          marginLeft: "500px",
          marginTop: "100px"
        }}
      >
        <form style={{ width: "350px" }}>
          <lable>
            Name:
            <input
              type="text"
              name="name"
              style={{ width: "250px" }}
              onChange={e => this.inputChanged(e)}
              value={this.state.name}
            />
          </lable>
          <br />
          <br />
          <lable>
            Username:
            <input
              type="text"
              name="username"
              style={{ width: "250px" }}
              onChange={e => this.inputChanged(e)}
              value={this.state.username}
            />
          </lable>
          <br />
          <br />
          <lable>
            Email:
            <input
              type="text"
              name="email"
              style={{ width: "250px" }}
              onChange={e => this.inputChanged(e)}
              value={this.state.email}
            />
          </lable>
          <br />
          <br />
          <lable>
            Age:
            <input
              type="text"
              name="age"
              style={{ width: "250px" }}
              onChange={e => this.inputChanged(e)}
              value={this.state.age}
            />
          </lable>
          <br />
          <br />
          <lable>
            Phone.No:
            <input
              type="text"
              name="phone"
              style={{ width: "250px" }}
              onChange={e => this.inputChanged(e)}
              value={this.state.phone}
            />
          </lable>
          <br />
          <br />
          <button type="button" onClick={this.submitData}>
            {" "}
            Submit{" "}
          </button>
          <button type="button" onClick={() => this.clear()}>
            {" "}
            Clear{" "}
          </button>
        </form>
        
       
        {this.state.data && this.state.data.length > 0 && (
          <div>
              <select
          name="selectInput"
          value={this.state.selectInput}
          onChange={e => this.selectInputChange(e)}
        >
          <option value="name"> NAME </option>
          <option value="username"> USERNAME </option>
          <option value="email"> EMAIL </option>
        </select>
        <lable>
          <input
            type="text"
            name="search"
            onChange={e => this.inputChanged(e)}
            value={this.state.serach}
          />
        </lable>
        <button
          type="button"
          name="searchInput"
          onClick={e => this.searchData(e)}
          value={this.state.searchInput}
        >
          Search
        </button>
        <button type="button" onClick={e =>this.reset(e)}>Reset</button>
        <br></br>
            <table border="2px solid black">
              <tr>
                <th>Index</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Age</th>
                <th>Phone.No</th>
              </tr>
              {this.state.data &&
                this.state.data.length > 0 &&
                this.state.data.map((value, index) => {
                  return (
                    <tr>
                      <td>{index}</td>
                      <td>{value.name}</td>
                      <td>{value.username}</td>
                      <td>{value.email}</td>
                      <td>{value.age}</td>
                      <td>{value.phone}</td>
                      <br />
                    </tr>
                  );
                })}
            </table>
          </div>
        )}
      </div>
    );
  }
}
export default Search;
