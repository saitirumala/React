import React,{Component} from 'react';
class Collapse extends Component{

    constructor(props){
        super(props);
        this.state={
           isOpen:false,
           value:"",
           button:true,
           userdata:[{
            "id": 1,
            "name": "sai1",
            "city": "Chennai"
          },
          {
            "id": 2,
            "name": "sai2",
            "city": "Bangalore"
          },
          {
            "id": 3,
            "name": "sai3",
            "city": "Hyderabad"
      
          },
          {
              "id": 4,
              "name": "sai4",
              "city": "Tirupati"
            }
            ]
        }
        console.log('userdata',this.state.userdata)
    }
    handelClick = (event,data) =>{
        event.preventDefault();
       this.setState({
          isOpen:true ,
          value:data,
          button:!this.state.button
       })
       console.log('data',this.state.value)
    }
    
    render(){
        
        return(
            <div>
             {this.state.userdata&&  this.state.userdata.length>0&&this.state.userdata.map((data,i)=>
              (<div>
                
                <ol>
                <button type="button" onClick={e => this.handelClick(e,data)} >{this.state.button?'+':'-'}</button>
                </ol>
              </div>)
              )}

              <p>{this.state.value.name}</p>
            </div>
            )  
        }
        
}
 
  
export default Collapse;