import React,{Component} from'react';

class Datasearch extends Component{
    constructor(props){
super(props);
this.state ={
    data:[],
    filteredData :[]
}
   this.input1=this.input1.bind(this);
   this.input2=this.input2.bind(this);      
   this.input3=this.input3.bind(this); 
   this.searchInput=this.searchInput.bind(this);
  
    }
    input1= (event) =>{
     this.setState({
        [event.target.name]:event.target.value
     })
     this.state.data.push({
         id1: this.state.id1,
         name1: this.state.name1,
         username1: this.state.username1,
         email1: this.state.email1,
         phone1: this.state.phone1,
         reg1: this.state.reg1,
         year1: this.state.year1,
     })
    }
    input2 = (event) =>{
        this.setState({
            [event.target.name]:event.target.value
         })
         this.state.data.push({
            id2: this.state.id2,
            name2: this.state.name2,
            username2: this.state.username2,
            email2: this.state.email2,
            phone2: this.state.phone2,
            reg2: this.state.reg2,
            year2: this.state.year2,
        })
    }
    input3 =(event) => {
        this.setState({
            [event.target.name]:event.target.value
         })
         this.state.data.push({
            id3: this.state.id3,
            name3: this.state.name3,
            username3: this.state.username3,
            email3: this.state.email3,
            phone3: this.state.phone3,
            reg3: this.state.reg3,
            year3: this.state.year3
        }) 
    }
    searchInput = (event) =>{
        
        
        const uniqueKey=this.state.name;
        this.state.filteredData = uniqueKey.filter(this.state.data.name);
    }
   
    render(){
        
        return(
        <div style={{border:"2px solid black",float:"left", marginLeft:"20px",marginTop:"100px"}}>
            Search by name <input type="text" placeholder="Search..name" style={{marginRight:"700px"}} onChange={(e)=>this.serachInput()} />
               Search by Id <input type="text" style={{float:"right"}} placeholder="Search..Id" onChange={(e)=>this.serachInput()} />
           <table border="2px solid black">
               <tr>
                   <th>Id</th>
                   <th>Name</th>
                   <th>Username</th>
                   <th>Email</th>
                   <th>Phone.No</th>
                   <th>Reg.No</th>
                   <th>Year</th>
               </tr>
               <tr>
                   <td><input type="text" name="id1" placeholder=" ..Id.. " onChange={(e)=>this.input1(e)} value={this.state.id1}/></td>
                   <td><input type="text" name="name1" placeholder=" ..Name.. " onChange={(e)=>this.input1(e)}  value={this.state.name1}/></td>
                   <td><input type="text" name="username1" placeholder=" ..Username.. " onChange={(e)=>this.input1(e)} value={this.state.username1} /></td>
                   <td><input type="text" name="email1" placeholder=" ..Email.. " onChange={(e)=>this.input1(e)} value={this.state.email1} /></td>
                   <td><input type="text" name="phone1" placeholder=" ..Phone.No.. " onChange={(e)=>this.input1(e)} value={this.state.phone1} /></td>
                   <td><input type="text" name="reg1" placeholder=" ..Reg.No.. " onChange={(e)=>this.input1(e)} value={this.state.reg1} /></td>
                   <td><input type="text" name="year1" placeholder=" ..Year.. " onChange={(e)=>this.input1(e)} value={this.state.year1} /></td>
               </tr>
               <tr>
                   <td><input type="text" name="id2" placeholder=" ..Id.. " onChange={(e)=>this.input2(e)} value={this.state.id2} /></td>
                   <td><input type="text" name="name2" placeholder=" ..Name.. " onChange={(e)=>this.input2(e)}  value={this.state.name2}/></td>
                   <td><input type="text" name="username2" placeholder=" ..Username.. " onChange={(e)=>this.input2(e)}  value={this.state.username2}/></td>
                   <td><input type="text" name="email2" placeholder=" ..Email.. " onChange={(e)=>this.input2(e)} value={this.state.email2} /></td>
                   <td><input type="text" name="phone2" placeholder=" ..Phone.No.. " onChange={(e)=>this.input2(e)} value={this.state.phone2}  /></td>
                   <td><input type="text" name="reg2" placeholder=" ..Reg.No.. " onChange={(e)=>this.input2(e)} value={this.state.reg2} /></td>
                   <td><input type="text" name="year2" placeholder=" ..Year.. " onChange={(e)=>this.input2(e)} value={this.state.year2} /></td>
               </tr>
               <tr>
                   <td><input type="text" name="id3" placeholder=" ..Id.. " onChange={(e)=>this.input3(e)} value={this.state.id3} /></td>
                   <td><input type="text" name="name3" placeholder=" ..Name.. " onChange={(e)=>this.input3(e)}  value={this.state.name3}/></td>
                   <td><input type="text" name="username3" placeholder=" ..Username.. " onChange={(e)=>this.input3(e)}  value={this.state.username3}/></td>
                   <td><input type="text" name="email3" placeholder=" ..Email.. " onChange={(e)=>this.input3(e)} value={this.state.email3} /></td>
                   <td><input type="text" name="phone3" placeholder=" ..Phone.No.. " onChange={(e)=>this.input3(e)} value={this.state.phone3}  /></td>
                   <td><input type="text" name="reg3" placeholder=" ..Reg.No.. " onChange={(e)=>this.input3(e)} value={this.state.reg3} /></td>
                   <td><input type="text" name="year3" placeholder=" ..Year.. " onChange={(e)=>this.input3(e)} value={this.state.year3} /></td>
               </tr>
           </table> 
        </div>
        )
    }
}
export default Datasearch;