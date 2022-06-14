import React from "react";
import { useState } from "react";

function Hooks2() {

    const [Title] = useState('initial value');

    const [count, setCount] = useState(0);

    return (

        <div>
            <center>

                <h2>{Title}</h2>

                <h1>{count}</h1>

                <button onClick={() => { setCount(count + 1) }}>
                    CLICK ME
                </button>

            </center>
        </div>

    )

}


export default Hooks2;