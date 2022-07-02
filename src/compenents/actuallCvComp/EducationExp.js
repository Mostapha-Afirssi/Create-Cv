
let id=0;
function EducationalExp(props) {
    return (
        <div className="educational">
            <b>Eduactional experiences</b>
            <ul>
                {props.edu.map((obj) =>{
                    return <li key={id++}><strong>{obj.schoolName}</strong><br/>{obj.titleOfStudy}<br/>{obj.dateOfStudy}</li>
                })}
            </ul>
        </div>
    )
}

export default EducationalExp;