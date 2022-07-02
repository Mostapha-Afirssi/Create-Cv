import "../Form.css";

function PracticalExperience(props){
    return (
    <div>
        <div>
            <label htmlFor="company-name">Company name</label>
            <p>{props.companyName}</p>
        </div>
        <div>
            <label htmlFor="position-title">Position title</label>
            <p>{props.postionTitle}</p>
        </div>
        <div>
            <label htmlFor="main-task">Main task of your job</label>
            <p>{props.mainTask}</p>
        </div>
        <div>
            <label htmlFor="from">From</label>
            <p>{props.from}</p>
            <label htmlFor="to">To</label>
            <p>{props.to}</p>
        </div>
    </div>
    )
}

export default PracticalExperience;