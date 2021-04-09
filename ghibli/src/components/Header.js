import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import logo from '../assets/image/logo/logo.png'

const MenuItem = () => {
    return(
        <div>
            <p>Filmes</p>
        </div>
    );
}

const Header = () => {
    return (
        <Container>
            <Row>
                <Col sm={3} lg={2}>
                    <img
                    src={logo} 
                    alt="Logo Ghibli"
                    />
                </Col>
                
                    <MenuItem/>
                    <MenuItem/>
                
                
            </Row>
        </Container>
    )
}

export default Header

