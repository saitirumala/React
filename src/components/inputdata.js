import React,{Component} from 'react';

class Inputdata extends Component {
    render(){
        return(
            <div>
                <form onSubmit={this.handelSubmit}>
                <input  type="text" onChange={this.inputChange} value={this.state.inputfield}> 
                </input>
                <button type="submit">Submit</button>
                </form>
                <h3>Visible in child: {this.state.inputfield}</h3>
            </div>
        )
    }
}
export default Inputdata;
