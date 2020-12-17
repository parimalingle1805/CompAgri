import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import {Navbar,Nav,NavDropdown,Form,FormControl,Button,Container,Row,Col,Card,ListGroup,ListGroupItem} from "react-bootstrap";


class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  componentDidMount(){
    document.title = "Shop | Farmer's Forum"
  }
render() {
    const { user } = this.props.auth;
return (
    
      <div>
         <Navbar bg="dark" variant="dark" expand="lg" >
             <Navbar.Brand href="/dashboard"><h1>Farmer's Forum</h1></Navbar.Brand>
             <Navbar.Toggle aria-controls="basic-navbar-nav" />
             <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/dashboard" style={{marginLeft:30, fontSize:30}}>Dashboard</Nav.Link>
                    <Nav.Link href="/dashboard" style={{marginLeft:30, fontSize:30}}>Shop</Nav.Link>
                    <Nav.Link href="/dashboard" style={{marginLeft:30, fontSize:30}}>Sell</Nav.Link>
                    <Nav.Link href="#link" onClick={this.onLogoutClick} style={{marginLeft:650, fontSize:30}}>Log Out</Nav.Link>
            
            </Nav>
                      
            </Navbar.Collapse>
        </Navbar>
       

        

        
        
         

      </div>
      
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);