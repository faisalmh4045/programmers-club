import { useEffect, useState } from "react";
import Hired from "../Hired/Hired";
import Programmers from "../Programmers/Programmers";
import AlertMessage from "../AlertMessage/AlertMessage";
import { Col, Row } from "react-bootstrap";

const Main = () => {
    const [hiredCoders, setHiredCoders] = useState([]);
    const [budgetRemaining, setBudgetRemaining] = useState(1000000);
    const [show, setShow] = useState(false);

    useEffect(() => {
        setBudgetRemaining(
            1000000 -
                hiredCoders.reduce((prev, coder) => prev + coder.salary, 0)
        );
    }, [hiredCoders]);

    const handleHiring = (programmer) => {
        const alreadyHired = hiredCoders.find(
            (coder) => coder.id === programmer.id
        );
        const budgetLeft = budgetRemaining - programmer.salary;

        if (!alreadyHired && budgetLeft >= 0) {
            setHiredCoders([...hiredCoders, programmer]);
        } else setShow(true);
    };

    const handleRemove = (programmer) => {
        const rem = hiredCoders.filter((coder) => coder.id !== programmer.id);
        setHiredCoders(rem);
    };

    return (
        <main className="mt-4">
            <Row>
                <Col lg={9}>
                    <Programmers handleHiring={handleHiring}></Programmers>
                </Col>
                <Col
                    xs={{ order: "first" }}
                    md={{ order: "last" }}
                    lg={3}
                    className="mb-3 mt-md-3 mt-lg-0"
                >
                    <Hired
                        hiredCoders={hiredCoders}
                        handleRemove={handleRemove}
                        budgetRemaining={budgetRemaining}
                    ></Hired>
                    <AlertMessage show={show} setShow={setShow}></AlertMessage>
                </Col>
            </Row>
        </main>
    );
};

export default Main;
