import React, { Component } from 'react';
import {Navbar , Container, Col} from 'react-bootstrap';

class Footer extends Component {
    render() {
        return (
           <Navbar fixed="bottom" bg="dark" variant="light">
               <Container>
                   <Col lg={12} style={{"textColor":"white"}}>
                       <div><center>
                           All Rights Resereved by Amdocs
                           </center> 
                       </div>
                   </Col>
               </Container>
           </Navbar>
        );
    }
}

export default Footer;