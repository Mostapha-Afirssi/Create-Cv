import "../Form.css";


function GeneralInformation(props){

    return (
    <div>
        <div className="test">
            <label htmlFor="name">Name</label>
            <p> {props.name}</p>
        </div>
        <div className="test">
            <label htmlFor="email">Email</label>
            <p> {props.email}</p>
        </div>
        <div className="test">
            <label htmlFor="phone">Phone number</label>
            <p> {props.phone}</p>
        </div>
    </div>
    )
}

export default GeneralInformation;