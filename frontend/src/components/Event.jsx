import React from "react";
import { Row, Col } from "reactstrap";

function Event(props) {
    if(props.reverse){
        return (
        <Row fluid className="mt-5 fg-pri">
            <Col className="bg-sec rounded-two-8">
                <p className="mx-5 my-5">
                {/* Description for the event goes here. You can add other details and if the event requires something(links etc) we can do it as well. */}
                {props.description}
                </p>
            </Col>
            <Col xs="6" sm="4" className="bg-sec rounded-one-8">
                {/* Event name  */}
                <h4 className="text-center mt-3 font-weight-bold">{props.name}</h4>
                <Row>
                    <Col>
                        {/* Event photo  */}
                        <img className="img-fluid mx-3 my-5" src={props.image} alt="ASEC" />
                    </Col>
                </Row>
            </Col>
        </Row>
        );
    }
    return (
        <Row fluid className="mt-5 fg-pri">
            <Col xs="6" sm="4" className="bg-sec rounded-one-8">
                {/* Event name  */}
                <h4 className="text-center mt-3 font-weight-bold">{props.name}</h4>
                <Row>
                    <Col>
                        {/* Event photo  */}
                        <img className="img-fluid mx-3 my-5" src={props.image} alt="ASEC" />
                    </Col>
                </Row>
            </Col>
            <Col className="bg-sec rounded-two-8">
                <p className="mx-5 my-5">
                {/* Description for the event goes here. You can add other details and if the event requires something(links etc) we can do it as well. */}
                {props.description}
                </p>
            </Col>
        </Row>
    );
}

export default Event;