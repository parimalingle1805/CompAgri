import React, { Component,useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import {Navbar,Nav,NavDropdown,Form,FormControl,Button,Container,Row,Col,Card,ListGroup,ListGroupItem,Modal} from "react-bootstrap";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  componentDidMount(){
    document.title = "Shop | Farmer's Forum";
  }
  state = {
    isOpen: false
  };
  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });
  
render() {
    const { user } = this.props.auth;
    
return (
    
      <div style={{width:"100%",height:"100%"}}>
     
         <Navbar bg="dark" variant="dark" expand="lg" >
             <Navbar.Brand href="/dashboard"><h1>Farmer's Forum</h1></Navbar.Brand>
             <Navbar.Toggle aria-controls="basic-navbar-nav" />
             <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/dashboard" style={{marginLeft:30, fontSize:30}}>Dashboard</Nav.Link>
                    <Nav.Link href="/shop" style={{marginLeft:30, fontSize:30}}>Shop</Nav.Link>
                    <Nav.Link href="/sell" style={{marginLeft:30, fontSize:30}}>Sell</Nav.Link>
                    <Nav.Link href="#link" onClick={this.onLogoutClick} style={{marginLeft:650, fontSize:30}}>Log Out</Nav.Link>
            
            </Nav>
                      
            </Navbar.Collapse>
        </Navbar>
        
       <div>
         <div style={{display:"flex", justifyContent:"center", marginTop:50}}>
           <h1>You can sell your Products here</h1>
         
           </div>
           <div style={{display:"flex", justifyContent:"center",marginTop:100}}>
                <Button variant="primary" onClick={this.openModal} style={{borderRadius:"20px"}}>
                    Add your item details here
                </Button>
            </div>
           <div style={{display:"flex", justifyContent:"center", marginTop:50}}>
           <Modal show={this.state.isOpen} onHide={this.closeModal} style={{backgroundColor:"darkgrey"}}>
          
            <Modal.Body>
                <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                       
                        <Form.Control type="email" placeholder="Email Addres" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput2">
                        <Form.Label>Product Title</Form.Label>
                        <Form.Control type="text" placeholder="Seeds/Tool/Fertilizer/etc..." />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput2">
                        <Form.Label>Product Image</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>
                    
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Quantity (max: 5):</Form.Label>
                        <Form.Control as="select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        </Form.Control>
                    </Form.Group>
                    
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Product Description</Form.Label>
                        <Form.Control as="textarea" rows={1} />
                    </Form.Group>
                </Form>
            </Modal.Body>
          <Modal.Footer>
          <Button variant="primary" style={{marginRight:10}} onClick={this.closeModal}>
              Send
            </Button>
            <Button variant="secondary" onClick={this.closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
           </div>
       </div>

        
         

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