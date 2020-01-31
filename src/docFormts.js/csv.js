import React,{Component} from 'react';
import CsvDownload from 'react-json-to-csv';
class Csv extends Component {
    constructor(props){
        super(props);
        this.state={
            tableData:[
                { 
                    "status":1,
                    "exportdata":{ 
                       "csv":[ 
                          { 
                             "label":"Employee Id",
                             "value":"employeeId"
                          },
                          { 
                             "label":"Employee Name",
                             "value":"first_name"
                          },
                          { 
                             "label":"Date of Birth",
                             "value":"DOB"
                          },
                          { 
                             "label":"Address",
                             "value":"address"
                          },
                          { 
                             "label":"Email ID",
                             "value":"email"
                          },
                          { 
                             "label":"Mobile No.",
                             "value":"phone"
                          },
                          { 
                             "label":"Date of Join",
                             "value":"DOJ"
                          },
                          { 
                             "label":"Status",
                             "value":"status"
                          }
                       ],
                       "data":[ 
                          { 
                             "_id":"5d7a2c6de81b3d17c0e87447",
                             "phone":"9878798876",
                             "email":"testrr@yopmail.com",
                             "first_name":"Test",
                             "employeeId":"KS12092019003",
                             "createdAt":"2019-09-12T11:30:53.217Z",
                             "DOB":"03-09-2001",
                             "address":"10, Mumbai - 500021, Maharashtra",
                             "DOJ":"09-09-2019",
                             "status":"Active"
                          },
                          { 
                             "_id":"5d78df9e604e111d2430cf6c",
                             "phone":"9876543211",
                             "email":"mano@yopmail.com",
                             "first_name":"Manoj",
                             "employeeId":"KS11092019001",
                             "createdAt":"2019-09-11T11:50:54.738Z",
                             "DOB":"01-01-1990",
                             "address":"#10, Thousand lights, Chennai - 600006, Tamil Nadu",
                             "DOJ":"08-09-2019",
                             "status":"Active"
                          }
                       ]
                    }
                 }
            ],

        }
    }
   handelClick =(event) =>{
event.preventDefault();

this.setState({
    csvData : this.state.tableData
})
    }
    
    render(){
        console.log('tableData',this.state.tableData)
        return(
            <div>
              <h1>Export json data to Csv </h1>
              <CsvDownload data={this.state.tableData} >
              </ CsvDownload>
              
            </div>
        )
    }
}
export default Csv;
