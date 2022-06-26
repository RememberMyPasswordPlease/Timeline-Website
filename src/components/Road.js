import React from "react";
import Milestone from "./Milestones";
import "./components.css"

class Road extends React.Component {
    constructor(props) {
        super(props)
        this.mile = props.mile // [{}, {}]

        this.width = props.mile.length * 900

        window.addEventListener("scroll", () => {
            document.getElementById("Road-Progress").style.width = Math.round(document.documentElement.clientWidth + window.pageXOffset) >= this.width ? "100%":
            (`${
                Math.round( ( ( ( (document.documentElement.clientWidth/2)+ window.pageXOffset ) / this.width )*100 ) )
                }%`)
        })

    }

    render() {
        return (<>
        <div className="Road">
            <div className="Stones">
                { this.mile.map( item => ( <Milestone data={item}></Milestone> ) ) }
            </div>
            <div className="Inner-Road">
                <div className="Outer-Progress">
                    <div className="Progress-Background">
                        <div className="Inner-Progress" id="Road-Progress"></div>
                    </div>
                </div>
            </div>
        </div>
        </>)
    }
}

export default Road