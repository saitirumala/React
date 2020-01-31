import React,{Component} from 'react';
import ReactUnsplash from './reactUnsplash';
class ReactUnsplashApp extends Component {
constructor(props){
    super(props);
}
render(){
    return(
        <div>
           <ReactUnsplash />
        </div>
    )
}
}

export default ReactUnsplashApp;