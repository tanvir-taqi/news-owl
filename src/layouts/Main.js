import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import LeftSide from '../components/LeftSide/LeftSide';
import RightSide from '../components/RightSide/RightSide';

const Main = ()=> {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={2} className='d-none d-lg-block'>
                    <LeftSide></LeftSide>
                    </Col>
                 
                    <Col lg={7}>
                    <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                    <RightSide></RightSide>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;