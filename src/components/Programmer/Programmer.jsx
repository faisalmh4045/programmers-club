import { Button, Card, Col } from "react-bootstrap";

const Programmer = ({ programmer, handleHiring }) => {
    const { img, name, handle, rating, contribution, salary } = programmer;

    return (
        <Col>
            <Card className="p-3 shadow-sm">
                <Card.Img variant="top" src={img} />

                <Card.Body className="text-center">
                    <Card.Title>{name}</Card.Title>
                    <div className="mt-4">
                        <h6>
                            <b>CF handle:</b>{" "}
                            <span className="text-danger">{handle}</span>
                        </h6>
                        <h6>
                            <b>Contest Rating:</b>{" "}
                            <span className="text-danger">{rating}</span>
                        </h6>
                        <h6>
                            <b>Contribution:</b>{" "}
                            <span className="text-success">{contribution}</span>
                        </h6>
                        <p>
                            <b>Salary:</b> <span>${salary}</span>
                        </p>
                    </div>
                    <Button
                        onClick={() => handleHiring(programmer)}
                        className="w-100"
                    >
                        Hire
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Programmer;

/* 

CF handle: tourist
Contest Rating: 3707
Contribution: +177
Salary: $200000
*/
