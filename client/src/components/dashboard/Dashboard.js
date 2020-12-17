import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import {Navbar,Nav,NavDropdown,Form,FormControl,Button,Container,Row,Col,Card,ListGroup,ListGroupItem,Modal} from "react-bootstrap";
import headerImg from './headerImg.jpg';


class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  componentDidMount(){
    document.title = "Dashboard | Farmer's Forum"
  }
  state = {
    isOpen: false
  };
  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });
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
                    <Nav.Link href="/shop" style={{marginLeft:30, fontSize:30}}>Shop</Nav.Link>
                    <Nav.Link href="/sell" style={{marginLeft:30, fontSize:30}}>Sell</Nav.Link>
                    <Nav.Link href="#link" onClick={this.onLogoutClick} style={{marginLeft:650, fontSize:30}}>Log Out</Nav.Link>
            
            </Nav>
                      
            </Navbar.Collapse>
        </Navbar>
        <img src={headerImg} style={{width:"100%"}}></img>

        <div style={{textAlign:"center",backgroundColor:"gray",paddingBottom:20,paddingTop:10}}>
            <h5 >DEVELOPING INNOVATIVE STRATEGIES</h5>
            <h1 >ACHIEVING GROWTH</h1>
        </div>

        
        <div style={{alignItems:"center",display:"flex",marginTop:50}}>
        <Card style={{ width: '18rem',marginLeft:300 }}>
               
                <Card.Body>
                    <Card.Title>Shop</Card.Title>
                    <Card.Text>
                    You can purchase all the products you require for a quality produce. We assure ​you good-quality and reasonably priced products from local vendors.<br/>- Seeds<br/>- Pesticides<br/>- Fertilizers<br/>- Machinery
                    </Card.Text>
                </Card.Body>
                
                <Card.Body>
                    <div style={{border: '2px solid blue'}}>
                    <Card.Link href="/shop" style={{marginLeft:85}}>Purchase</Card.Link>
                    </div>
                   
                </Card.Body>
         </Card>

         <Card style={{ width: '18rem', marginLeft:50 }}>
               
                <Card.Body>
                    <Card.Title>Sell</Card.Title>
                    <Card.Text>
                    <p style={{fontSize:20}}>Sell your produce with the nearest buyer or store at your convenience. List your price, network with the community and be your own master     </p>
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    
                </ListGroup>
                <Card.Body>
                    <div style={{border: '2px solid blue'}}>
                    <Card.Link href="#" style={{marginLeft:100}}>Sell</Card.Link>
                    </div>
                   
                </Card.Body>
         </Card>

         <Card style={{ width: '18rem',marginLeft:50 }}>
               
                <Card.Body>
                    <Card.Title>Discuss</Card.Title>
                    <Card.Text>
                    <p style={{fontSize:23}}>Network with the farmer community. Learn what's new in the marketplace. Connect. Share. Grow. </p>                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                   
                </ListGroup>
                <Card.Body>
                    <div style={{border: '2px solid blue'}}>
                    <Card.Link href="#" style={{marginLeft:70}}>Discussion</Card.Link>
                    </div>
                   
                </Card.Body>
         </Card>

        </div>
        <div style={{marginLeft:1300}}>
          <Button variant="primary" onClick={this.openModal} style={{borderRadius:"20px"}}>
            Quick question
          </Button>
        </div>
        
        <Modal show={this.state.isOpen} onHide={this.closeModal} style={{backgroundColor:"darkgray"}}>
          <Modal.Header closeButton>
            <Modal.Title>Submmit your query here!</Modal.Title>
          </Modal.Header>
            <Modal.Body>
              <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    
                  
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Describe problem here</Form.Label>
                      <Form.Control as="textarea" rows={5} />
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