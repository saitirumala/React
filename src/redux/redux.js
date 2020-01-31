import React,{Component} from 'react';
import Data from './components/data';
import Table from './components/table';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const initialstate ={
    data:''
}
function reducer(state=initialstate,action){
    console.log('reducer',state,action)
    switch (action.type){
        case 'SUBMITDATA' :
          return{
            data:'',
          };
          case 'RESET' :
            return{
              data: ''
            };
        default :
        return state;   
      }
}

const store = createStore(reducer);
store.dispatch({type:'SUBMITDATA'});
store.dispatch({type:'SUBMITDATA'});
store.dispatch({type:'RESET'});
class Redux extends Component{
constructor(props){
    super(props);
    this.state={
        data:'',

    }
}

render(){
    return(
        <div>
            <Provider store={store} >
            <Data />
            <Table /> 
            </Provider>
          
        </div>
    )
}
}
export default Redux;