import React from "react";
import { Container, Row, Col } from "reactstrap";

export default () => {
    return (
        <Container fluid className="mt-5 rounded-10">
            <Row className="mx-3 mx-md-5">
                <Col md={8} className="m-3">
                    <Row className="fg-pri">
                        <Col>
                            <h1 className="font-weight-bold">some BIG text. bigger than h1. </h1>
                        </Col>
                    </Row>
                    <Row className="fg-pri mt-3">
                        <Col>
                            <h4>smol text, maybe intro or smth.</h4>
                        </Col>
                    </Row>
                </Col>
                <Col className="m-3 fg-sec">something interactive / an image / yeet</Col>
            </Row>
            <div className="fg-pri my-5 py-5 mx-3 mx-md-5">
                make the row above span (almost) the entire viewport height
            </div>
            <Row className="fg-pri mt-4 mx-3 mx-md-5">
                <Col className="bg-sec rounded-8 p-4">
                    <h2> Social media links and stuff I guess </h2>
                    <h5> Do we really need this lighter colored background here? </h5>
                    <h5 className="mb-4"> Should we make this a bottom-fixed footer instead? </h5>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </Col>
            </Row>
        </Container>
    );
};
