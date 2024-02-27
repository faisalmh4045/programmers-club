import { useEffect, useState } from "react";
import Programmer from "../Programmer/Programmer";
import { Row } from "react-bootstrap";

const Programmers = ({ handleHiring }) => {
    const [programmers, setProgrammers] = useState([]);

    useEffect(() => {
        fetch("/fakedata.JSON")
            .then((res) => res.json())
            .then((data) => setProgrammers(data));
    }, []);

    return (
        <Row lg={3} className="g-4">
            {programmers.map((programmer, idx) => (
                <Programmer
                    key={idx}
                    programmer={programmer}
                    handleHiring={handleHiring}
                ></Programmer>
            ))}
        </Row>
    );
};

export default Programmers;
