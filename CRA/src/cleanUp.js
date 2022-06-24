import { useState, useEffect } from 'react';
function Hello() {
    useEffect(() => {
        console.log("hi:)");
        return function () {
            console.log("bye :(");
        }
    }, []);
    return <h3>Hello</h3>;
}
function CleanUp() {
    const [showing, setShowing] = useState(false);
    const onClick = () => setShowing((prev) => !prev);
    return (
        <div>
            <hr />
            <h1>Clean Up</h1>
            {showing ? <Hello /> : null}
            <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
        </div>
    );
}

export default CleanUp;
