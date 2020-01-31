import React,{Component} from 'react';
import { connect } from 'react-redux';
import {INCREMENT,DECREMENT,RESET,add,remove,reset} from '../action';
class Counter extends Component {
constructor(props){
    super(props);
//     this.state ={
// count:0
//     }
}

add =(event) =>{
    event.preventDefault();
//     this.setState({
// count: this.state.count+1
//     })
this.props.dispatch(add())
}
remove =(event) =>{
    event.preventDefault();
    // this.setState({
    //       count: this.state.count-1    
    //     })
    this.props.dispatch(remove())
}
reset =(event) =>{
    event.preventDefault();
    this.props.dispatch(reset())
}


render(){
    console.log('counter value',this.props.count)
    return(
        <div>
            <h3>Counter</h3>
            <button type="button" onClick={this.add}> + </button>
           <span> Counter {this.props.count} </span>
         
           <button type="button" onClick={this.remove} > - </button>
           <button style={{marginLeft:"10px"}} type="button" onClick={this.reset}> Reset </button>
        </div>
    )
    
}
}
function mapStateToProps(state) {
    return {
      count: state.count
      
    };
    
  }

  export default connect(mapStateToProps)(Counter);