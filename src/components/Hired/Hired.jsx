import Coders from "./Coders";

const Hired = ({ hiredCoders, handleRemove, budgetRemaining }) => {
    const totalCost = 1000000 - budgetRemaining;
    return (
        <div className="border p-3 sticky-top">
            <div className="d-flex justify-content-between border-bottom mt-2">
                <p>Coders hired </p>
                <b>{hiredCoders.length}</b>
            </div>
            <div className="d-flex justify-content-between border-bottom mt-2">
                <p>Total cost </p>
                <b>${totalCost}</b>
            </div>
            <div className="d-flex justify-content-between mt-2">
                <p>Budget left </p>
                <b>${budgetRemaining}</b>
            </div>
            <div>
                {hiredCoders.length ? <hr className="mt-0" /> : ""}
                {hiredCoders.map((coder, idx) => (
                    <Coders
                        key={idx}
                        coder={coder}
                        handleRemove={handleRemove}
                    ></Coders>
                ))}
            </div>
        </div>
    );
};

export default Hired;
