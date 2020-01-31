import React,{Component} from 'react';
import {Form,FormGroup,Input,Label} from 'reactstrap';
class SearchData extends Component {
     
    constructor(props){
        super(props);
        this.state={
            userdata:''
            //[
              // {data:'sai'},
              // {data:'prasad'},
              // {data:'kiran'}
            // ]
        }
        
    }
    onSearch =(event)=>{
        this.setState({ searchedValue: event.target.value });
    }
    render(){
        const userdata =[
            {
        }]
        return(
        <div> 
        <Form>
            <FormGroup>
            <Label for="applicant name"> Name </Label>
                <Input
                type="text"
                name="name"
                id="Name"
                placeholder=" Enter Data.."
                value={this.state.userdata}
                onChange={this.onSearch}
                
                />
                <tr>
                    <td>{this.state.userdata}</td>
                </tr>
            </FormGroup>
        </Form>
        </div>
        )
    }
}
export default SearchData;
