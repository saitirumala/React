import React,{Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
class Remove extends Component {
constructor(props){
    super(props);
}



render(){
    return(
        <div>
           
        </div>
    )
}
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(addCounter, dispatch) }
  }
export default connect(mapDispatchToProps)(Remove);