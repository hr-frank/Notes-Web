import { findByLabelText } from "@testing-library/react";
import React from "react";
import styled from "styled-components";
import logo from "../assests/logo.png";

export default function Navbar() {
  return  (
  <>
    <div>
          
            <div className="brand">
                    <div className="container">
                        <img src={logo} alt="" />
                        Travelo
                    </div>
                    <div className="toggle"></div>
            </div>



            <ul>
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#services">Services</a>
                    </li>
                    <li>
                        <a href="#recommend">Places</a>
                    </li>
                    <li>
                        <a href="#testimonials">Testimonials</a>
                    </li>
            </ul>



            <button>Connect</button>

            
    </div>
  </>
  ); 
  
}


const div = styled.nav;
 
