

function CvHead(props) {

    return (
        <div className="head">
            <div className="full-name">
                <h1>{props.name}</h1>
                <p>{props.currentPostion}</p>
            </div>          
            <div className="image-place"><center><img src="" alt="Profile picture"/></center></div>
        </div>
    )
}

export default CvHead;