import "../Form.css";
import { useRef } from "react";

function GeneralInformation(props){
    const name = useRef();
    const email = useRef();
    const phone = useRef();
    const adress = useRef();
    const currentPostion = useRef();

    function submitHandler (event){
        event.preventDefault();

        const generalInfo = {
            name: name.current.value,
            email: email.current.value,
            phone: phone.current.value,
            adress: adress.current.value,
            currentPostion: currentPostion.current.value
        };

        props.onSubmit(generalInfo);
    }
    
    return (
    <div>
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" required ref={name}></input>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input id="email" type="text" required ref={email}></input>
            </div>
            <div>
                <label htmlFor="phone">Phone number</label>
                <input id="phone" type="text" required ref={phone}></input>
            </div>
            <div>
                <label htmlFor="address">Adress</label>
                <input id="adresse" type="text" required ref={adress}></input>
            </div>
            <div>
                <label htmlFor="currentPosition">Current postion</label>
                <input id="currentPostion" type="text" required ref={currentPostion}></input>
            </div>
            <div>
                <button>Confirm</button>
            </div>
        </form>
    </div>
    )
}

export default GeneralInformation;