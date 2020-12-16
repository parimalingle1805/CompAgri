import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Button} from "react-bootstrap";
import { urlencoded } from "body-parser";
import bg from "./bg.jpg";
class Landing extends Component {
  render() {
    return (
        <div style={{height:"750px",width:"100%",backgroundImage:`url(${bg})`}}>
      <div style={{ height: "100%",width:"100%",marginLeft:300,color:"white" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
              <p style={{fontSize:60}}><b><i>WELCOME TO FARMER'S FORUM</i></b></p><br/><br/><br/><br/><br/><br/><br/>
            <h2>
              <b>Register     --OR--     Login</b><br/><br/><br/>
            </h2>
            <br />
            <br />
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Register
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large btn-flat waves-effect green black-text"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
export default Landing;