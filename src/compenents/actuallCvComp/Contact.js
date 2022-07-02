


function Contact(props) {
    return (
        <div className="contact">
            <h2>Contact</h2>
            <ul>
                <li>{props.phone}</li>
                <li>{props.email}</li>
                <li>{props.adress}</li>
            </ul> 
        </div>
    )
}

export default Contact;