import "../Form.css";
import { useRef,useState } from "react";

function PracticalExperience(props){
    
    const companyName = useRef();
    const positionTitle= useRef();
    const from = useRef();
    const to = useRef(); 

    function submitHandler (event){
        event.preventDefault();

        const practicalExp = {
            companyName: companyName.current.value,
            postionTitle: positionTitle.current.value,
            from: from.current.value,
            to: to.current.value
        };
        
        props.onSubmit(practicalExp);
    }

    

    return (
    <div>
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="company-name">Company name</label>
                <input id="company-name" type="text" required ref={companyName}></input>
            </div>
            <div>
                <label htmlFor="position-title">Position title</label>
                <input id="position-title" type="text" required ref={positionTitle}></input>
            </div>
            <div>
                <label htmlFor="from">From</label>
                <input id="from" type="text" required ref={from}></input><br/>
                <label htmlFor="to">To</label>
                <input id="to" type="text" required ref={to}></input>
            </div>
            <div>
                <button>Add</button>
            </div>
        </form>
        <button onClick={props.deletePractical}>delete</button>
    </div>
    )
}

export default PracticalExperience;
