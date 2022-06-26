import React from "react"

class Milestone extends React.Component {
    constructor(props) {
        super(props)
        this.data = props.data // {id, title, icon, description}
        this.state = {
            "opacity": 0.0
        }

        window.addEventListener("scroll", () => {

            const progressBar = document.getElementById("Road-Progress")

            const progressBarRect = progressBar.getBoundingClientRect()

            const stopPoint = document.getElementById(`Stop-${this.data.id}`).getBoundingClientRect()

            const Bubble = document.getElementById(`Checkpoint-${this.data.id}`)

            if ((progressBarRect.right >= stopPoint.left && progressBarRect.left <= stopPoint.left) || (progressBar.style.width === "100%")) 
            {
                Bubble.style.backgroundColor = "#4E99EF"
            }
            else 
            {
                Bubble.style.backgroundColor = "#e6e6e6"
            }

        })

    }

    mouseOver () {
        this.setState({ "opacity": 1.0 })
    }

    mouseLeave () {
        this.setState({ "opacity": 0.0 })
    }

    render() {
        return (<>
        <div className="Milestone">
            
            <div className="Container">
                <div className="Icon" onMouseEnter={ () => this.mouseOver() } onMouseLeave={ () => this.mouseLeave() }>
                    <img src={ this.data.icon } alt={ this.data.title }/>
                </div>
                <div className="Title">{ this.data.title }</div>
                <div className="Stop" id={ `Stop-${ this.data.id }` }>
                    <div className="Checkpoint" id={ `Checkpoint-${ this.data.id }` }></div>
                </div>
            </div>

            <div className="Content" style={ { "opacity": this.state.opacity } }>
                <div className="Heading">{ this.data.title }</div>
                <div className="Description">{ this.data.description }</div>
            </div>
        </div>
        </>)
    }
}

export default Milestone