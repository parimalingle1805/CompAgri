import React, { Component,useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import {Navbar,Nav,NavDropdown,Form,FormControl,Button,Container,Row,Col,Card,ListGroup,ListGroupItem,Modal} from "react-bootstrap";
import seed from './seed.jpg';
import fert from './fert.jpg';
import mach from './mach.png';
import pest from './pest.jpg';
import wall from './wall.jpg';
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
    
      <div style={{width:"100%",height:"100%", backgroundImage: `url(${wall})`,backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
     
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
         <div style={{display:"flex", justifyContent:"center", marginTop:50,color:"white"}}>
           <h1 style={{fontSize:100}}>Products you can buy</h1>
         </div>
         <div style={{display:"grid",gridTemplateColumns:"50% 50%", marginTop:100}}>
           <div style={{display:"flex", justifyContent:"center"}}>
           <Card style={{ width: '30rem',padding:30 }}>
              <Card.Img variant="top" src={seed} />
              <Card.Body>
                <Card.Title><h1 style={{marginTop:13}}>Seeds</h1></Card.Title>
                <Card.Text>
                  Good Quality seeds can improve your yield by a great scale.
                </Card.Text>
                <Button variant="primary">Buy: Rs.100/Kg</Button>
              </Card.Body>
            </Card>
           </div>


           <div style={{display:"flex", justifyContent:"center"}}>
           <Card style={{ width: '30rem',padding:30 }}>
              <Card.Img variant="top" src={fert} />
              <Card.Body>
                <Card.Title><h1>Fertilizers</h1></Card.Title>
                <Card.Text>
                  Fertilizers are necessary for good health of crops which will inturn increase production.
                </Card.Text>
                <Button variant="primary">Buy: From Rs.500</Button>
              </Card.Body>
            </Card>
           </div>


           <div style={{display:"flex", justifyContent:"center"}}>
           <Card style={{ width: '30rem',padding:30 }}>
              <Card.Img variant="top" src={pest} />
              <Card.Body>
                <Card.Title><h1>Pesticides</h1></Card.Title>
                <Card.Text>
                  Good Quality pesticides will protect your crops from unwanted insects.
                </Card.Text>
                <Button variant="primary">Buy: From Rs.500</Button>
              </Card.Body>
            </Card>
           </div>


           <div style={{display:"flex", justifyContent:"center"}}>
           <Card style={{ width: '30rem',padding:30 }}>
              <Card.Img variant="top" src={mach} />
              <Card.Body>
                <Card.Title><h1 style={{marginTop:130}}>Machinery</h1></Card.Title>
                <Card.Text>
                 You can buy all the machinery and tools required for vaious work.
                </Card.Text>
                <Button variant="primary" >Buy: From Rs.10000</Button>
              </Card.Body>
            </Card>
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