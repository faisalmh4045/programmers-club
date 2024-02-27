import { useEffect } from "react";
import { Alert } from "react-bootstrap";

const AlertMessage = ({ show, setShow }) => {
    useEffect(() => {
        if (show) {
            const timeout = setTimeout(() => {
                setShow(false);
            }, 4000);

            return () => clearTimeout(timeout);
        }
    }, [show]);

    return (
        show && (
            <Alert
                className="position-fixed bottom-0 end-0 m-4"
                variant="warning"
                onClose={() => setShow(false)}
                dismissible
            >
                <p>already hired or insufficient budget</p>
            </Alert>
        )
    );
};

export default AlertMessage;
