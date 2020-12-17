import React, { Component,useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import {Navbar,Nav,NavDropdown,Form,FormControl,Button,Container,Row,Col,Card,ListGroup,ListGroupItem,Modal} from "react-bootstrap";
import seed from './seed.jpg';
import fert from './fert.jpg';
import mach from './mach.png';
import pest from './pest.jpg';
class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  componentDidMount(){
    document.title = "Shop | Farmer's Forum";
  }
  
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
                    <Nav.Link href="/dashboard" style={{marginLeft:30, fontSize:30}}>Shop</Nav.Link>
                    <Nav.Link href="/dashboard" style={{marginLeft:30, fontSize:30}}>Sell</Nav.Link>
                    <Nav.Link href="#link" onClick={this.onLogoutClick} style={{marginLeft:650, fontSize:30}}>Log Out</Nav.Link>
            
            </Nav>
                      
            </Navbar.Collapse>
        </Navbar>
        
       <div>
         <div style={{display:"flex", justifyContent:"center", marginTop:50}}>
           <h1>Products you can buy</h1>
         </div>
         <div style={{display:"grid",gridTemplateColumns:"50% 50%", marginTop:100}}>
           <div style={{display:"flex", justifyContent:"center"}}>
             <h2>1. Seeds</h2>
             
             <div style={{marginLeft:100}}>
             <img src={seed} style={{width:"100%"}}></img>
             <h3 style={{marginTop:30}}>Price starting from: Rs. 100 </h3>
                <Button variant="primary" style={{borderRadius:"20px", marginTop:20, marginBottom:100}}>
                  Buy Now
                </Button>
             </div>
           </div>


           <div style={{display:"flex", justifyContent:"center"}}>
             <h2>2. Fertilizers</h2>
             
             <div style={{marginLeft:100}}>
             <img src={fert} style={{width:"100%"}}></img>
             <h3 style={{marginTop:20}}>Price starting from: Rs. 500 </h3>
                <Button variant="primary" style={{borderRadius:"20px", marginTop:20,marginBottom:100}}>
                  Buy Now
                </Button>
             </div>
           </div>


           <div style={{display:"flex", justifyContent:"center"}}>
             <h2>3. Pesticides</h2>
             
             <div style={{marginLeft:100}}>
             <img src={pest} style={{width:"100%"}}></img>
             <h3 style={{marginTop:20}}>Price starting from: Rs. 500 </h3>
                <Button variant="primary" style={{borderRadius:"20px", marginTop:20,marginBottom:100}}>
                  Buy Now
                </Button>
             </div>
           </div>


           <div style={{display:"flex", justifyContent:"center"}}>
             <h2>4. Tools</h2>
             
             <div style={{marginLeft:100}}>
             <img src={mach} style={{width:"100%"}}></img>
             <h3 style={{marginTop:100}}>Price starting from: Rs. 10000 </h3>
                <Button variant="primary" style={{borderRadius:"20px", marginTop:20,marginBottom:100}}>
                  Buy Now
                </Button>
             </div>
           </div>
          

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