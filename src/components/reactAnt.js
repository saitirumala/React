import React,{Component}from 'react';
import 'antd/dist/antd.css';
import {Button,Icon,Radio,Typography } from 'antd';
import { Row, Col } from 'antd';
import {Layout  }  from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const { Paragraph } = Typography;
class ReactAnt extends Component {
    constructor(props){
        super(props);
        this.state={
            size:'large',
            IconLoading:false,
            text:"This is an editable text."
        }
        this.handleChange=this.handleChange.bind(this);
        this.clickLoading=this.clickLoading.bind(this);
    }
    
    handleChange = e =>{
this.setState({
    size:e.target.value
})
    }
    clickLoading = ()=>{
        this.setState({
            IconLoading:true,
        })
    }
    editChange =text =>{
this.state({text})
    }

render(){
    const {size} = this.state;
    return(
        <div>
            <Radio.Group value={size} onChange={this.handleChange}>
                <Radio.Button value="large">Large</Radio.Button>
                <Radio.Button value="default">default</Radio.Button>
                <Radio.Button value="small">small</Radio.Button>
            </Radio.Group>
            <h1 size={size}>Download</h1>
            <Button type="primary" shape="circle" icon="download" size={size}></Button>
            <Button type="danger" shape="round" icon="download"size={size}>Download</Button>
            <Button type="default"  icon="download" size={size}>Download</Button>
            <Button type="dashed"  icon="download" size={size}>Download</Button>
            <h1 size={size}>Search</h1>
            <Button type="primary" shape="circle" size={size} icon="search"></Button>
            <Button type="danger" shape="round" size={size} icon="search">search</Button>
            <Button type="primary" size={size}  icon="search">search</Button>
            <Button type="primary" size={size} shape="dashed" icon="search">search</Button>
            <h1 size={size}>forward and Backward</h1>
            <Button type="primary" size={size}  shape="circle" icon="left"></Button>
            <Button type="danger" size={size} shape="round" icon="left">Forward</Button>
            <Button type="primary"size={size}  >Backward <Icon type="right"></Icon></Button>
            <Button type="primary" size={size} shape="dashed" icon="twitter">Backward</Button>
         <h1>Loading</h1>
           <Button type="primary" >Loading</Button>
           <Button type="primary" onClick={this.clickLoading} loading={this.state.IconLoading} >click me!</Button>
           <Button type="upload" icon="upload"></Button>
           <Paragraph editable onChange={this.editchange}>{this.state.text}</Paragraph>
           <Paragraph copyable>This is a copyable text.</Paragraph>

           <div>
        <Row >
        <Col span={18} push={6}>
            col-18 col-push-6
        </Col>
        <Col span={6} pull={18}>
            col-6 col-pull-18
        </Col>
        </Row>
        <Layout>
      <Header>Header</Header>
      <Layout>
        <Sider>Sider</Sider>
        <Content>Content</Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
        </div>
        </div>

       
    )
} 
}

export default ReactAnt; 