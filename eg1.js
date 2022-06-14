import React from "react";
import { useState } from "react";

function Hooks() {
    
    const [title] = useState('initial value');

    return(

        <div>
            <center>
                <h2>{title}</h2>
            </center>
        </div>

    )

}

export default Hooks;