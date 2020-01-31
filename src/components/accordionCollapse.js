import React,{Component} from 'react';
import userdata from './userdata.json';
class AccordionCollapse extends Component{

    constructor(props){
        super(props);
        this.state={
           isOpen:false,
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
        console.log('userdata',userdata)
    }
    handelOpen1 = (event) =>{
        event.preventDefault();
       this.setState({
          isOpen:true ,
          data:this.state.userdata
       })
       
    }
    handelClose1 =(event)=>{
        event.preventDefault();
        this.setState({
            isOpen:false,
            data:this.state.userdata
        })
        console.log('userdata',this.state.data)
    }
    render(){
        const userdata=this.state.userdata;
        const isOpen= this.state.isOpen;
        let button;
        if(isOpen){
            button=<CloseButton  onClick={this.handelClose1} ></CloseButton>
            
        }
        else{
            button =<OpenButton onClick={this.handelOpen1}></OpenButton>
            
        } 
          
        return(
            <div>
               {this.state.userdata&&  this.state.userdata.length>0&&this.state.userdata.map((data,i)=>
             
                    (<div>
                       {console.log('userdata',data.id,data.name,data.city,)}
                    {button}
                    <Greeting 
             isOpen={isOpen}></Greeting>
                </div>)
               
               )}
            </div>
            )  
        }
        
}
  function OpenButton(props) {
    return (
    <ol>
        <li><button onClick={props.onClick}>
        -
      </button></li>
      
    </ol>
    );
  }
  function CloseButton(props) {
    return (
     <ol>
        <li><button onClick={props.onClick}>
        +
      </button></li>
     </ol>
    );
  }
  
function UserGreeting(props) {
    return <h1>{}1</h1>;
  }
  
  function GuestGreeting(props) {
    return <h1></h1>;
  }
  
  function Greeting(props) {
    const isOpen = props.isOpen;
    if (isOpen) {
        return <GuestGreeting />;
    }
    return <UserGreeting />;
  }
  
export default AccordionCollapse;