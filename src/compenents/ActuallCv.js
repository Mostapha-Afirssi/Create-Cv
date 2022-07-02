import CvHead from "./actuallCvComp/CvHead";
import CvBody from "./actuallCvComp/Cvbody";

function ActuallCv(props) {
    return (
        <div className="cv">
            <CvHead {...props.gen}/>
            <span></span>
            <CvBody {...props}/>
        </div>
    )
}

export default ActuallCv;