import React,{Component} from 'react';

class Table extends Component{
constructor(props){
    super(props);
    this.state={
        data:[]
    }
    // this.submitData = this.submitData.bind(this);
    // this.reset = this.reset.bind(this);
    // this.deleteRow = this.deleteRow.bind(this);
}
deleteRow = (event)=>{ 
    event.preventDefault();
    
    }

render(){
    console.log('name',this.props.name)
    return(
        <div>
            
            <p>{this.props.value}</p>
            <br></br><br></br>
           
           
                            
        </div>
    )
}
}
export default Table;