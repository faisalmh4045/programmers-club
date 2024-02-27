import { Button } from "react-bootstrap";

const Programmer = ({ programmer, handleHiring }) => {
    return (
        <div className="border border-1 m-1">
            <p>{programmer.name}</p>
            <p>{programmer.salary}</p>
            <Button onClick={() => handleHiring(programmer)}>hire</Button>
        </div>
    );
};

export default Programmer;
