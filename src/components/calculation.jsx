import React, { useState } from 'react';
import moment from 'moment';

function Calculation() {

    const [displayResult, setDisplayResult] = useState("");

    const [result, setResult] = useState("");

    function calculate(event) {        

        const x = document.getElementById("jdate").value;

        const joiningDate = moment(x);

        const y = document.getElementById("cdate").value;

        const closingDate = moment(y);

        //const diffDays =  closingDate.diff(joiningDate, 'days');

        const timeDiff = Math.abs(closingDate - joiningDate);

        const diffDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

        const totalAmount = Math.ceil(diffDays*16.6666667);

        console.log(totalAmount);

        setResult(totalAmount);

        setDisplayResult("Your estimated bill is - ₹");

        event.preventDefault();

    }

    return (
        <div>

            <form onSubmit={calculate}>

                <div>

                    <label for="jdate">Joining date  : <input type="text" name="jDate" id="jdate" placeholder="mm/dd/yyyy" /></label>

                </div>

                <br></br>

                <div>

                    <label for="cdate"> Closing Date  : <input type="text" name="cDate" id="cdate" placeholder="mm/dd/yyyy" /> </label>

                </div>

                <br></br>

                <div className="submitButton">

                    <input type="submit" name="jDate" id="jdate" />

                </div>

                <br></br>

                <div>
                   <h2>{displayResult} {result} </h2>
                </div>

            </form>

        </div>

    );
}

export default Calculation;


