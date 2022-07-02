import "../Form.css";
import { useRef } from "react";

function EducationalExperience(props){
    const schoolName = useRef();
    const title = useRef();
    const date = useRef();

    function submitHandler (event){
        event.preventDefault();

        const educationalExp = {
            schoolName: schoolName.current.value,
            titleOfStudy: title.current.value,
            dateOfStudy: date.current.value
        };

        props.onSubmit(educationalExp);
    }

    return (
    <div>
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="school-name">School name</label>
                <input id="school-name" type="text" required ref={schoolName}></input>
            </div>
            <div>
                <label htmlFor="title-of-study">Title of study</label>
                <input id="title-of-study" type="text" required ref={title}></input>
            </div>
            <div>
                <label htmlFor="date-of-study">Date of study</label>
                <input id="date-of-study" type="text" required ref={date}></input>
            </div>
            <div>
                <button>Add</button>
            </div>
        </form>
        <button onClick={props.deleteEducational}>Delete</button>
    </div>
    )
}

export default EducationalExperience