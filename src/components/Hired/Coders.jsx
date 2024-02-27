import { Button } from "react-bootstrap";

const Coders = ({ coder, handleRemove }) => {
    return (
        <>
            <div>
                {coder.name} - {coder.salary}
            </div>
            <Button onClick={() => handleRemove(coder)}>remove</Button>
        </>
    );
};

export default Coders;
