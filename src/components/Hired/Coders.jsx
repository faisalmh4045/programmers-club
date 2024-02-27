import { Button } from "react-bootstrap";

const Coders = ({ coder, handleRemove }) => {
    return (
        <div className="d-flex border justify-content-between mt-1 p-2 shadow-sm">
            <div className="d-flex align-items-center">
                <img className="w-25" src={coder.img} alt="" />
                <h6 className="ms-2 mb-0">{coder.name}</h6>
            </div>
            <Button
                variant="light"
                className="text-danger bg-transparent border-0 fw-bold"
                onClick={() => handleRemove(coder)}
            >
                <i className="fa-regular fa-trash-can"></i>
            </Button>
        </div>
    );
};

export default Coders;
