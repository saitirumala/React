import React,{Component} from 'react';
import Csv from './csv';
import Excel from './excel';
import Pdf from './pdf';
class DocTypeApp extends Component {
    render(){
        return(
            <div>
               <Csv />
               <Excel />
               <Pdf />
            </div>
        )
    }
}
export default DocTypeApp;
