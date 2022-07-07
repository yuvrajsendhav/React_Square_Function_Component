import { useState } from "react";
function Square()
{
    var [a,setA] = useState(0);
    function Number(e)
    {
       // alert(e.target.value);
         setA(e.target.value);
    }
    function calculate(e)
    {
        setA(a*a);
       //alert(a);
        e.preventDefault();
    }
    return(
        <div>
                <form onSubmit={(e)=>calculate(e)}>
                <br/>
                <input type="text" onChange={(e)=>Number(e)} /> <br/><br/>
                <input type="submit" value="CHECK" />
                </form>
                <p>{a}</p>
        </div>
    );
    }
    export default Square;