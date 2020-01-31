import React, { Component } from 'react';
import { Button, Row, Col, FormGroup, Input } from 'reactstrap';
export class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zero: 0,
            one: 1,
            two: 2,
            three: 3,
            four: 4,
            five: 5,
            six: 6,
            seven: 7,
            eight: 8,
            nine: 9,
            sum:'+',
            data: [],
            result:'=',
            shri:'',
            sub:'-',
            div:'/',
            mul:'*'
        }
    }

    clickone = () => {
        this.state.data.push(this.state.one)
        this.setState({
            data: this.state.data
        })
    }
    clicktwo = () => {
        this.state.data.push(this.state.two)
        this.setState({
            data: this.state.data
        })
    }
    clickthree = () => {
        this.state.data.push(this.state.three)
        this.setState({
            data: this.state.data
        })
    }
    clickfour = () => {
        this.state.data.push(this.state.four)
        this.setState({
            data: this.state.data
        })
    }
    clickfive = () => {
        this.state.data.push(this.state.five)
        this.setState({
            data: this.state.data
        })
    }
    clicksix = () => {
        this.state.data.push(this.state.six)
        this.setState({
            data: this.state.data
        })
    }

    clickseven = () => {
        this.state.data.push(this.state.seven)
        this.setState({
            data: this.state.data
        })
    }
    clickeight = () => {
        this.state.data.push(this.state.eight)
        this.setState({
            data: this.state.data
        })
    }
    clicknine = () => {
        this.state.data.push(this.state.nine)
        this.setState({
            data: this.state.data
        })
    }
    clickzero = () => {
        this.state.data.push(this.state.zero)
        this.setState({
            data: this.state.data
        })
    }
    clicksum = () => {
        this.state.data.push(this.state.sum)
        this.setState({
            data: this.state.data
        })
    }
    clicksub = () => {
        this.state.data.push(this.state.sub)
        this.setState({
            data: this.state.data
        })
    }
    clickmul = () => {
        this.state.data.push(this.state.mul)
        this.setState({
            data: this.state.data
        })
    }
    clickdiv = () => {
        this.state.data.push(this.state.div)
        this.setState({
            data: this.state.data
        })
    }
   
    clear = () => {
        this.setState({
            data: []
        })
    }
    delete = () => {
        if (this.state.data.length > 0) {
            this.state.data.pop()
            this.setState({
                data: this.state.data
            })
        }

    }
    result =()=>{
    //    var stringData= this.state.data.toString();
    //    var resultData= eval(stringData);
    //    console.log(resultData);
    const sai = this.state.data.join('')
    const pra= sai.toString()
    console.log('1234',pra)
  
  //  console.log(this.state.shri)
  this.state.data.push('='.concat(eval(pra)))

this.setState({
    data: this.state.data
})
    }

    render() {
       
//console.log(sai.toString())
        // console.log("this.props", this.props)
        return (
            <div>
                <h1 style={{ marginLeft: "530px" }}>Calculator</h1>

                <hr></hr>
                <div style={{ border: "2px solid black", width: "270px", marginLeft: "500px", backgroundColor: "#99A3A4", borderRadius: "10px" }} >
                    <textarea style={{ width: '265px',fontSize:'20px' }} onChange={()=>{}} value={`${this.state.data.length > 0 ? this.state.data.map((item) => { return item }).join('') : ''}`} />
                    <Row form style={{ marginLeft: "13px", marginTop: "10px" }} >
                        <Col md={3}>
                            <FormGroup>
                                <Button style={{ border: "1px solid black", backgroundColor: "#34495E" }} onClick={this.clickone} name="1"  >1</Button>
                            </FormGroup>
                        </Col>
                        <Col md={3}>
                            <FormGroup>
                                <Button style={{ border: "1px solid black", backgroundColor: "#34495E" }} onClick={this.clicktwo} name="2"  >2</Button>
                            </FormGroup>
                        </Col>
                        <Col md={3}>
                            <FormGroup>
                                <Button style={{ border: "1px solid black", backgroundColor: "#34495E" }} onClick={this.clickthree} name="3" >3</Button>
                            </FormGroup>
                        </Col>
                        <Col md={3}>
                            <FormGroup>
                                <Button style={{ border: "1px solid black", backgroundColor: "#C02844ed" }} onClick={this.clicksum} name="+" >+</Button>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form style={{ marginLeft: "13px" }}>
                        <Col md={3}>
                            <FormGroup>
                                <Button style={{ border: "1px solid black", backgroundColor: "#34495E" }} onClick={this.clickfour} name="4" >4</Button>
                            </FormGroup>
                        </Col>
                        <Col md={3}>
                            <FormGroup>
                                <Button style={{ border: "1px solid black", backgroundColor: "#34495E" }} onClick={this.clickfive} name="5" >5</Button>
                            </FormGroup>
                        </Col>
                        <Col md={3}>
                            <FormGroup>
                                <Button style={{ border: "1px solid black", backgroundColor: "#34495E" }} onClick={this.clicksix} name="6" >6</Button>
                            </FormGroup>
                        </Col>
                        <Col md={3}>
                            <FormGroup>
                                <Button style={{ border: "1px solid black", width: "35px", backgroundColor: "#C02844ed" }} onClick={this.clicksub} name="-" > - </Button>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form style={{ marginLeft: "13px" }}>
                        <Col md={3}>
                            <FormGroup>
                                <Button style={{ border: "1px solid black", backgroundColor: "#34495E" }} onClick={this.clickseven} name="7" >7</Button>
                            </FormGroup>
                        </Col>
                        <Col md={3}>
                            <FormGroup>
                                <Button style={{ border: "1px solid black", backgroundColor: "#34495E" }} onClick={this.clickeight} name="8" >8</Button>
                            </FormGroup>
                        </Col>
                        <Col md={3}>
                            <FormGroup>
                                <Button style={{ border: "1px solid black", backgroundColor: "#34495E" }} onClick={this.clicknine} name="9" >9</Button>
                            </FormGroup>
                        </Col>
                        <Col md={3}>
                            <FormGroup>
                                <Button style={{ border: "1px solid black", width: "35px", backgroundColor: "#C02844ed" }}onClick={this.clickmul} name="*" >X</Button>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form style={{ marginLeft: "13px" }}>
                        <Col md={3}>
                            <FormGroup>
                                <Button style={{ border: "1px solid black", backgroundColor: "#2874A6  " }} onClick={this.clear} name="C">C</Button>
                            </FormGroup>
                        </Col>
                        <Col md={3}>
                            <FormGroup>
                                <Button style={{ border: "1px solid black", backgroundColor: "#34495E" }} onClick={this.clickzero} name="0">0</Button>
                            </FormGroup>
                        </Col>
                        <Col md={3}>
                            <FormGroup>
                                <Button style={{ border: "1px solid black", backgroundColor: "#17202A" }} onClick={this.delete} name="D" >D</Button>
                            </FormGroup>
                        </Col>
                        <Col md={3}>
                            <FormGroup>
                                <Button style={{ border: "1px solid black", width: "35px", backgroundColor: "#C02844ed" }} onClick={this.clickdiv} name="%" >/</Button>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form style={{ marginLeft: "13px" }}>
                        <Col md={9}>
                            <FormGroup>
                                <Button style={{ border: "1px solid black", width: "230px", backgroundColor: "#196F3D" }} onClick={this.result} name="="> Solve (=) </Button>
                            </FormGroup>
                        </Col>

                    </Row>
                </div>

            </div>
        )
    }
}
export default Calculator;

// class Display extends Component{

//     render(){
//         return(
//             <div>
//                  <Input type="text" style={{border:"2px solid black", fontSize:"25px"}} onChange={e => this.change(e)} value={this.state.name} ></Input>
//             </div>
//         )
//     }
// } 
// export default Display;
// export class ResultComponent extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {

//             dislply: ""
//         }
//     }

//     number = (event) => {
//         //     console.log('hjbc',props)
//         //     if(this.props.name === "="){
//         //         this.calculate()
//         //     }

//         //     else if(this.props.name === "C"){
//         //         this.reset()
//         //     }
//         //     else {
//         //         this.setState({
//         //             result: this.props.result + this.props.name
//         //         })
//         //     }
//         this.setState({
//             [this.props.name]: event.target.value
//         })
//     }



//     calculate = () => {
//         try {
//             this.setState({
//                 result: (eval(this.props.name) || "") + ""
//             })
//         } catch (e) {
//             this.setState({
//                 result: "error"
//             })
//         }
//     };
//     reset = () => {
//         this.setState({
//             result: ""
//         })
//     };
//     render() {
//         let { result } = this.props;
//         return (
//             <div className="result">
//                 <Input style={{ border: "2px solid black", fontSize: "20px", backgroundColor: "white", marginTop: "15px", width: "232px", marginLeft: "15px" }} value={this.props.name}></Input>
//             </div>
//         )
//             ;
//     }
// }
