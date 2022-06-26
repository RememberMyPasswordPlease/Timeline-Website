import "./Timeline.css"
import Road from "../../components/Road"


const Timeline = () => {   
    
    let TimelineData = require("./TimelineData.json")
    TimelineData = Object.values(TimelineData)

    const TimelineWidth = TimelineData.length * 900

    return (
        <><div className="Timeline" style={{"width": `${TimelineWidth}px`}}>
            <Road mile={ TimelineData }></Road>
        </div></>
    )
}

export default Timeline