import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const LatestOffer = ({offer}) => {
    const {name,img}= offer;
    return (
        <div>
            <Row xs={1} md={2} className="g-4">
                <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <button className='btn btn-outline-dark'>Details</button>
                    </Card.Body>
                </Card>
                </Col>
                )
</Row>
        </div>
    );
};

export default LatestOffer;