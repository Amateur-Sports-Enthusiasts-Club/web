import React from "react";
import { Container, Row, Col } from "reactstrap";
import Event from "../components/Event.jsx";

export default () => {
    var events = require('./events/Football.json');
    return (
        <Container fluid className="mt-5 rounded-10">
            <Row>
                <Col>
                    <h1 className="text-center font-weight-bold fg-ter">FOOTBALL(Add background)</h1>
                </Col>
            </Row>
            <Row fluid className="mt-2 rounded-10">
                <Col>
                    <h3 className="text-center font-italic">
                        {" "}
                        Add a one line sentence here and Add a background image that
                        remains fixed, choose a dark coloured one.
                    </h3>
                </Col>
            </Row>
            {events.map((data, key) => {
                return(
                    <div key={key}>
                    <Event name={data.name} image={data.image} description={data.description} reverse={key%2} />
                    <Row fluid className="mt-5"></Row>
                    </div>
                );
            })}
        </Container>
    );
};
