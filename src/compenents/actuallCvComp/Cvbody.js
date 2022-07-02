import Contact from "./Contact";
import EducationalExp from "./EducationExp";
import PracticalExp from "./PracticalExp";


function CvBody(props) {
    return (
        <div className="body">
            <div className="experiences">
                <PracticalExp pra={props.pra}/>
                <span></span>
                <EducationalExp edu={props.edu}/>
            </div>
            <div className="further-info">
                <div className="additional"></div>
                <Contact {...props.gen}/>
            </div>
        </div>
    )
}

export default CvBody;