
let id = 0;
function PracticalExp(props) {
    return (
        <div className="practical">
            <b>Practical experiences</b>
            <ul>
                {props.pra.map((obj) =>{
                    return <li key={id++}><strong>{obj.companyName}</strong><br/>{obj.postionTitle}<br/>{obj.from} - {obj.to}</li>
                })}
            </ul>
        </div>  
    )
}

export default PracticalExp;