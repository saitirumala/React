import React, { Component } from 'react';
import { Form, Label, Input, Row, Col, FormGroup, Button, FormText, Table } from 'reactstrap';
import { AvForm, AvRadio, AvRadioGroup } from 'availity-reactstrap-validation';
class Reactstrap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            files: [],
            selectInput: "name",
            reCallData: [],
            name1: 'Yes',
            name2: 'No'
        }
        this.handelChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.searchData = this.searchData.bind(this);
        this.reset = this.reset.bind(this);
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
            // [event.target.name]:event.target.file
        })
    }
    handleFileChange = event => {
        this.setState({
            files: event.target.files,
        })

    }
    submit = event => {
        event.preventDefault();
        const data = [...this.state.data];
        if (
            this.state.name == "" &&
            this.state.username == "" &&
            this.state.email == "" &&
            this.state.password == "" &&
            this.state.confirmPassword == "" &&
            this.state.address == "" &&
            this.state.address2 == "" &&
            this.state.city == "" &&
            this.state.restate == "" &&
            this.state.dob == "" &&
            this.state.age == "" &&
            this.state.phone == "" &&
            this.state.pin == "" &&
            this.state.files == "" &&
            this.state.files == "" &&
            this.state.deg == "" &&
            this.state.url == ""
        ) {
            alert('fill the data')
        } else {
            this.state.data.push({
                name: this.state.name,
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
                confirmPassword: this.state.confirmPassword,
                address: this.state.address,
                address2: this.state.address2,
                city: this.state.city,
                restate: this.state.restate,
                dob: this.state.dob,
                age: this.state.age,
                phone: this.state.phone,
                pin: this.state.pin,
                files: this.state.files,
                deg: this.state.deg,
                url: this.state.url
            });
        }
        this.setState({
            data: this.state.data,
            reCallData: this.state.data
        })
    }
    handleSearchChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    searchData = (event) => {
        event.preventDefault();
        var selectData = this.state.search;
        var uniqueKey = this.state.selectInput;
        var Output = this.state.data.filter(function (selectInput) {
            console.log(selectInput.name, 'uniqueKey', typeof uniqueKey)
            if ('name' === uniqueKey) {
                return selectInput.name === selectData
            } else if ('username' === uniqueKey) {
                return selectInput.username === selectData
            } else {
                return selectInput.phone === selectData
            }
        })
        if (Output && Output.length > 0) {
            this.setState({
                data: this.state.reCallData,
                data: Output
            });
        } else {
            alert("no data");
        }
    }
    reset = (event) => {
        event.preventDefault();
        this.setState({
            data: this.state.reCallData
        })
    }
    handelChangeRadio = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })

    }
    handleSubmit = (event, value, errors) => {
        event.preventDefault();
        this.setState({
            name: this.state.value,

        })

    }
    render() {

        console.log('name', this.state.name1)
        return (
            <div>
                <AvForm onSubmit={this.handleSubmit}>
                    <AvRadioGroup inline name="name" label="Select Yes! or No!" required>
                        <AvRadio name="Yes" onChange={this.handelChangeRadio} label="Yes" value={this.state.name1} />
                        <AvRadio name="No" onChange={this.handelChangeRadio} label="No" value={this.state.name2} />
                    </AvRadioGroup>
                    <FormGroup>
                        <Button >Submit</Button>
                    </FormGroup>
                </AvForm>
                <Form>
                    <Col md={12} xs={12}>
                        <Row form>
                            <Col md={6} xs={12}>
                                <FormGroup>
                                    <Label for="applicant name"> Name </Label>
                                    <Input
                                        type="text"
                                        name="name"
                                        id="Name"
                                        placeholder=" Enter Your Name"
                                        onChange={e => this.handleChange(e)}
                                        value={this.state.name}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6} xs={12}>
                                <FormGroup>
                                    <Label for="applicant username"> Username </Label>
                                    <Input
                                        type="text"
                                        name="username"
                                        id="UserName"
                                        placeholder=" Enter Your Username"
                                        onChange={e => this.handleChange(e)}
                                        value={this.state.username}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup>
                            <Label for="applicant email"> Email </Label>
                            <Input
                                type="email"
                                name="email"
                                id="Email"
                                placeholder=" Enter Your Email"
                                onChange={e => this.handleChange(e)}
                                value={this.state.email}
                            />
                        </FormGroup>
                        <Row form>
                            <Col md={6} xs={12}>
                                <FormGroup>
                                    <Label for="applicant password"> Password </Label>
                                    <Input
                                        type="password"
                                        name="password"
                                        id="Password"
                                        placeholder=" Enter Your Password"
                                        onChange={e => this.handleChange(e)}
                                        value={this.state.password}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6} xs={12}>
                                <FormGroup>
                                    <Label for="applicant Confirm-password"> Confirm-Password </Label>
                                    <Input
                                        type="password"
                                        name="confirmPassword"
                                        id="ConfirmPassword"
                                        placeholder=" Enter Your Confirm-Password"
                                        onChange={e => this.handleChange(e)}
                                        value={this.state.confirmPassword}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup>
                            <Label for=" applicant  Address">Address</Label>
                            <Input type="text" name="address" id="Address" placeholder=" 1234 Main St" onChange={e => this.handleChange(e)}
                                value={this.state.address} />
                        </FormGroup>
                        <FormGroup>
                            <Label for=" applicant Address2">Address 2</Label>
                            <Input type="text" name="address2" id="Address2" placeholder=" Apartment, studio, or floor" onChange={e => this.handleChange(e)}
                                value={this.state.address2} />
                        </FormGroup>
                        <Row form>
                            <Col md={6} xs={12}>
                                <FormGroup>
                                    <Label for="applicant City"> City </Label>
                                    <Input type="text" name="city" id="City" onChange={e => this.handleChange(e)}
                                        value={this.state.city} />
                                </FormGroup>
                            </Col>
                            <Col md={6} xs={12}>
                                <FormGroup>
                                    <Label for=" applicant State"> State </Label>
                                    <Input type="text" name="restate" id="State" onChange={e => this.handleChange(e)}
                                        value={this.state.restate} />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={6} xs={12}>
                                <FormGroup>
                                    <Label for="applicant dob"> Date of Birth </Label>
                                    <Input
                                        type="date"
                                        name="dob"
                                        id="Dob"
                                        placeholder=" Enter Your Birth date"
                                        onChange={e => this.handleChange(e)}
                                        value={this.state.dob}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6} xs={12}>
                                <FormGroup>
                                    <Label for="applicant age"> Age </Label>
                                    <Input
                                        type="number"
                                        name="age"
                                        id="Age"
                                        placeholder=" Enter Your Age"
                                        onChange={e => this.handleChange(e)}
                                        value={this.state.age}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={6} xs={12}>
                                <FormGroup>
                                    <Label for="applicant phone"> Phone Number </Label>
                                    <Input
                                        type="number"
                                        name="phone"
                                        id="Phone"
                                        placeholder=" Enter Your Phone Number Ex: 9492704294"
                                        onChange={e => this.handleChange(e)}
                                        value={this.state.phone}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6} xs={12}>
                                <FormGroup>
                                    <Label for="applicant area Pincode"> Pincode </Label>
                                    <Input
                                        type="number"
                                        name="pin"
                                        id="Pin"
                                        placeholder=" Enter Your Pincode"
                                        onChange={e => this.handleChange(e)}
                                        value={this.state.pin}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup row>
                            <Label for="applicant Upload Image" sm={2}> Upload Applicant Image</Label>
                            <Col sm={10} xs={12}>
                                <label style={{ border: '1px solid #ccc', display: 'inline-block', padding: '6px 12px', cursor: 'pointer' }} for="file-upload" class="custom-file-upload">
                                    <i class="fa fa-cloud-upload"></i> Custom Upload
                            </label>
                                <Input style={{ display: '' }} id="file-upload" type="file" name="image" id="Image" files={this.state.doc} onChange={e => this.handleFileChange(e)}
                                />
                                <FormText color="muted">
                                    The Uploaded Image must be one among in this fallowing type [ jpg,pdf,word ]
                    </FormText>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for=" applicant Upload file" sm={2}> Upload Applicant Documents</Label>
                            <Col sm={10} xs={12}>
                                <Input type="file" name="doc" id="Doc" files={this.state.doc} onChange={e => this.handleFileChange(e)}
                                />
                                <FormText color="muted">
                                    The Uploaded Documents must be one among in this fallowing type [ jpg,pdf,word ]
                    </FormText>
                            </Col>
                        </FormGroup>
                        <Row form>
                            <Col sm={6} xs={12}>
                                <FormGroup>
                                    <Label for="applicant Select"> Select Your highest Degree </Label>
                                    <Input type="select" name="deg" id="exampleSelect" style={{ backgroundColor: "silver" }} onChange={e => this.handleChange(e)}
                                        value={this.state.deg}>
                                        <option style={{ backgroundColor: "yellow" }} value="B.E / B.tech"> B.E / B.tech</option>
                                        <option style={{ backgroundColor: "yellow" }} value="12th">12th</option>
                                        <option style={{ backgroundColor: "yellow" }} value="10th">10th</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col sm={6} xs={12}>
                                <FormGroup>
                                    <Label for=" applicant Url">Link your any Profile Url</Label>
                                    <Input
                                        type="url"
                                        name="url"
                                        id="Url"
                                        placeholder=" Url placeholder"
                                        onChange={e => this.handleChange(e)} value={this.state.url}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Button color="primary" style={{ marginLeft: "520px", width: "300px" }} onClick={this.submit}> <a href="#" style={{ color: "black" }}>Submit</a> </Button>{' '}
                        <br></br><br></br>
                    </Col>
                </Form>
                {this.state.data && this.state.data.length > 0 && (
                    <div>
                        <Row form>
                            <Col md={3}>
                                <FormGroup>

                                    <Input type="select" name="selectInput" id="Search" onChange={e => this.handleSearchChange(e)}
                                        value={this.state.search}>
                                        <option value="Name">Name</option>
                                        <option value="Username">Username</option>
                                        <option selected value="Phone.No">Phone.No</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col sm={3}>
                                <FormGroup>
                                    <Input
                                        type="text"
                                        name="search"
                                        id="search"
                                        style={{ border: "1px solid green" }}
                                        onChange={e => this.handleChange(e)}
                                        value={this.state.search}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={5}>
                                <FormGroup>
                                    <Button
                                        color="success"
                                        style={{ width: "400px", marginLeft: "80px" }}
                                        onClick={e => this.searchData(e)}
                                    > Search </Button>
                                </FormGroup>
                            </Col>
                            <Col md={1}>
                                <FormGroup>
                                    <Button type="button" onClick={e => this.reset(e)}>Reset</Button>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Table border="1px solid black">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Username</th>
                                    <th>Email</th>
                                    <th>Password</th>
                                    <th>Con-Password</th>
                                    <th>Address</th>
                                    <th>Address 2</th>
                                    <th>City</th>
                                    <th>State</th>
                                    <th>DOB</th>
                                    <th>Age</th>
                                    <th>Phone.No</th>
                                    <th>Pincode</th>
                                    <th>Image</th>
                                    <th>Doc</th>
                                    <th>Degree</th>
                                    <th>Link</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.data &&
                                    this.state.data.length > 0 &&
                                    this.state.data.map((value, index) => {
                                        return (
                                            <tr>
                                                <th scope="row">{index}</th>
                                                <td>{value.name}</td>
                                                <td>{value.username}</td>
                                                <td>{value.email}</td>
                                                <td>{value.password}</td>
                                                <td>{value.confirmPassword}</td>
                                                <td>{value.address}</td>
                                                <td>{value.address2}</td>
                                                <td>{value.city}</td>
                                                <td>{value.restate}</td>
                                                <td>{value.dob}</td>
                                                <td>{value.age}</td>
                                                <td>{value.phone}</td>
                                                <td>{value.pin}</td>
                                                <td>{value.image}</td>
                                                <td>{value.doc}</td>
                                                <td>{value.deg}</td>
                                                <td>{value.url}</td>
                                            </tr>
                                        )

                                    })}
                            </tbody>
                        </Table>
                    </div>
                )}
            </div>
        )
    }
}

export default Reactstrap;