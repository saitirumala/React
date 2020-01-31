import React,{Component} from 'react';

class Data extends Component{
    constructor(props){
        super(props);
        this.state={
            items:[],
            name:'',
            username:'',
            email:'',
            age:''
        }
        this.submitData = this.submitData.bind(this);
        this.nameChanged = this.nameChanged.bind(this);
        this.reset =this.reset.bind(this);
        this.deleteRow=this.deleteRow.bind(this);
        
    }   
    
    nameChanged (event){
        this.setState ({
            [event.target.name]: event.target.value
        })
            }
           
    
    
    submitData(event,value){
    event.preventDefault();
    let items = [...this.state.items];
   if(this.state.name=="" && this.state.username=="" && this.state.email=="" 
   && this.state.age==""){
    
   }
   else{
    this.state.items.push(
        {
      name: this.state.name,
      username: this.state.username,
      email: this.state.email,
      age: this.state.age,
      
    });
   
   }
    this.setState({ 
        name: this.state.name,
        username: this.state.username,
        email: this.state.email,
        age: this.state.age,
        items:this.state.items,
       
    })
    console.log('items',this.state.items)
    }
    reset(){
        this.setState({name:'',email:'',age:'',username:''})
    }
    deleteRow=(index)=>{
        this.state.items.splice(index,1);
this.setState({
items:this.state.items
})
    }
    
    render(){
        
        return(
            <div>
                <form style={{marginLeft:"350px"}} >
                   <lable>
                       Name: 
                   <input type="text" style={{width:"270px",marginLeft:"50px"}} name='name' onChange={ this.nameChanged}  value={this.state.name}/>
                   </lable><br /><br />
                   <lable>
                       Username: 
                   <input type="text" name='username'style={{width:"270px",marginLeft:"25px"}} onChange={this.nameChanged} value={this.state.username}/>
                   </lable><br /><br />
                   <lable>
                       Email: 
                   <input type="text" name='email' style={{width:"270px",marginLeft:"53px"}} onChange={this.nameChanged} value={this.state.email}/>
                   </lable><br /><br />
                   <lable>
                       Age: 
                   <input type="text"  name='age' style={{width:"270px",marginLeft:"60px"}}  onChange={this.nameChanged} value={this.state.age}/>
                   </lable><br /><br />
                </form>
                <button type="button" style={{width:"70px",marginLeft:"350px"}} onClick={this.submitData}> Submit </button>
                <button type="reset" style={{width:"70px",marginLeft:"260px"}} onClick={this.reset} > Reset </button>
                <br></br>
                {this.state.items&& this.state.items.length>0&&
                <table border="2px solid red" style={{marginLeft:'300px'}}>
                 <tr>
                     <th style={{width:'30px'}}> Index </th>
                     <th style={{width:'100px'}}> Name </th>
                     <th style={{width:'100px'}}> Username </th>
                     <th style={{width:'150px'}}> Email </th>
                     <th style={{width:'50px'}}> Age </th>
                     <th style={{width:'100px'}}> Action </th>
                 </tr>
                {this.state.items&&this.state.items.length>0&& this.state.items.map((value,index)=>{
                    return(
                    <tr> 
                     <td>{index}</td>
                     <td>{value.name}</td>
                     <td>{value.username}</td>
                     <td>{value.email}</td>
                     <td>{value.age}</td>
                     <td><button type="button" onClick={this.deleteRow} style={{backgroundColor:"#C0284D"}}><b>Delete</b></button></td>
                     <br/><br/>
                 </tr>
                  )
                  })}
             </table>   
                } 
            </div>
            
        )
    }
}
export default Data;