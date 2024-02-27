import { useEffect, useState } from "react";
import Programmer from "../Programmer/Programmer";

const Programmers = ({ handleHiring }) => {
    const [programmers, setProgrammers] = useState([]);

    useEffect(() => {
        fetch("/fakedata.JSON")
            .then((res) => res.json())
            .then((data) => setProgrammers(data));
    }, []);

    return (
        <div>
            <div>
                {programmers.map((programmer, idx) => (
                    <Programmer
                        key={idx}
                        programmer={programmer}
                        handleHiring={handleHiring}
                    ></Programmer>
                ))}
            </div>
        </div>
    );
};

export default Programmers;
