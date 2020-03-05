import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  
} from 'reactstrap';
import {useHistory} from 'react-router-dom'
import { Link, animateScroll as scroll } from "react-scroll";

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
// const history= useHistory();
// console.log('====================================');
// console.log(history);
// console.log('====================================');
  return (
    <div>
      <Navbar fixed='top' color="light" light expand="md">
        <NavbarBrand href="/">React App</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
            <Link
    activeClass="active"
    to="section1"
    spy={true}
    smooth={true}
    offset={-70}
    duration= {500}
>Reactstrap</Link>
              {/* <NavLink onClick={()=>history.push('/')}>Reactstrap</NavLink> */}
            </NavItem>
            <NavItem>
            <Link
    activeClass="active"
    to="section2"
    spy={true}
    smooth={true}
    offset={-70}
    duration= {500}
>Map</Link>
              {/* <NavLink onClick={()=>history.push('/map')} >Map</NavLink> */}
            </NavItem>
            <NavItem>
            <Link
    activeClass="active"
    to="section3"
    spy={true}
    smooth={true}
    offset={-70}
    duration= {500}
>Calculator</Link>
              {/* <NavLink onClick={()=>history.push('/calculator')} >Calculator</NavLink> */}
            </NavItem>
            <NavItem>
            <Link
    activeClass="active"
    to="section4"
    spy={true}
    smooth={true}
    offset={-70}
    duration= {500}
>Form</Link>
              {/* <NavLink onClick={()=>history.push('/form')}>Form</NavLink> */}
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;