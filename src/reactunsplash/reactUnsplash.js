import React, { Component } from 'react';
import axios from 'axios';
import {Table} from 'reactstrap'
class ReactUnsplash extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: [],
            urls: [],
            full: ''
        }
    }
    componentDidMount() {

    }
    handelSearch = (event) => {

        this.setState({
            searchImage:event.target.value
        })
    }
    searchData = (event) => {
        event.preventDefault();
        axios.get('https://api.unsplash.com/photos/?client_id=6d3e73dc59f513d6204e9bb392954c44684752005ba3e61e6d1754eca1837f78')
            .then(res => {
                this.setState({
                    photos: res.data,
                })  
            })
    }
    render() {
        return (
            <div>
                <form>
                    <input type="search" name="search"  onChange={this.handelSearch} value={this.state.name} ></input>
                    <button type="button" onClick={this.searchData}>Search</button>
                    {this.state.photos && this.state.photos.length > 0 && this.state.photos.map((photo) => {
                        return (
                            <Table>
                                <tr>
                                <th><img style={{width:'400px',height:'400px'}} src={photo.urls.full}></img></th>
                                </tr>
                            </Table>
                        )
                    }
                    )}
                </form>

            </div>
        )
    }
}

export default ReactUnsplash;