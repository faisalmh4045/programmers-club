import Coders from "./Coders";

const Hired = ({ hiredCoders, handleRemove, budgetRemaining }) => {
    const totalCost = 1000000 - budgetRemaining;
    return (
        <div>
            <p>hired: {hiredCoders.length}</p>
            <p>cost: {totalCost}</p>
            <p>remainingBudget: {budgetRemaining}</p>
            <div>
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
