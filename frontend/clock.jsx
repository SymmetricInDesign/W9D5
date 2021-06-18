import React from "react"
class Clock extends React.Component {
    componentDidMount() {
        this.intervalHandle =  setInterval(this.tick.bind(this), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.intervalHandle)
    }
    constructor(props) {
        super(props)
        this.state = {time: new Date()}
    } 

    render() {
        // return <h1>{this.state.time.getHours()}:{this.state.time.getMinutes()}:{this.state.time.getSeconds()}</h1>
        const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }
        let dateStr = this.state.time.toLocaleDateString(undefined, options)
        let charArr = dateStr.split("")
        
            for(let i = 0; i < charArr.length; i++) {
                if (charArr[i] === ",") {
                    charArr[i] = " ";
                }
            };
    
        return (
        <div className="outer-container">
            <h1>Clock</h1>
            <div className="inner-clock-div">
                <h1> <span className="label"> Time:</span> <span className="date-string">{this.state.time.toLocaleTimeString("ar-AF")}</span></h1>
                    <h1> <span className="label"> Date:</span> <span className="date-string">{charArr.join("")}</span></h1>

            </div>
        </div>);
    }

    tick() {
        console.log ("tick");
        this.setState({ time: new Date() })
    }


}



export default Clock