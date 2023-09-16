
import React, {useState} from "react";

function Inputs(){
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');

    const [result, setResult] = useState('');
    const [status, setStatus] = useState('');

    function handleNumberChange( e, num){
        let val=e.target.value;
        if(num===1) setNum1(val);
        if(num===2) setNum2(val);
    }

    function calculate(op){
        validate();
        checkResult(op);
    }

    function checkResult(op){
        if(status== "ERROR!") return;
        const number1 = parseFloat(num1);
        const number2 = parseFloat(num2);
        let res;

        if(op==='+'){
            res=number1+number2;
        }
        else if(op==='-'){
            res=number1-number2;
        }
        else if(op==='*'){
            res=number1*number2;
        }
        else if(op==='/'){
            res=number1/number2;
        }

        setResult('Result- '+res);
        

    }

    function validate(){
        if(num1=== ''){
            setResult("Num1 cannot be empty");
            setStatus("ERROR!");
            return;
        }
        else if(num2=== ''){
            setResult("Num2 cannot be empty");
            setStatus("ERROR!");
            return;
        }

        const number1 = parseFloat(num1);
        const number2 = parseFloat(num2);

        if(isNaN(number1)){
            setResult("Num1 is not valid");
            setStatus("ERROR!");
            return;
        }

        else if(isNaN(number2)){
            setResult("Num2 is not valid");
            setStatus("ERROR!");
            return;
            
        }

        setStatus("SUCCESS!")
    }

    return(
        <div>
            <div className="input-section">
            <div className="inputdiv"><input type="text" className="inputs" placeholder="NUM 1"
            onChange={(e) => handleNumberChange(e, 1)}/></div>
            <div className="inputdiv"><input type="text" className="inputs" placeholder="NUM 2"
            onChange={(e) => handleNumberChange(e, 2)}/></div>

            </div>
            <div className="button-part">
                <div className="button-container"><button onClick={()=>calculate('+')}>+</button></div>
                <div className="button-container"><button onClick={()=>calculate('-')}>-</button></div>
                <div className="button-container"><button onClick={()=>calculate('*')}>*</button></div>
                <div className="button-container"><button onClick={()=>calculate('/')}>/</button></div>
            </div>
            <div className="resultandstatus">
                {status && <div className="status">{status}</div>}
                {result && <div className="result">{result}</div>}
            </div>
        </div>
    )
}

export default Inputs;