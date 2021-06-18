import React from "react"

class Tabs extends React.Component{
    constructor(props){
        super(props);
        this.state = {index: 0}
        this.tabs = props.tabs
    }

    render(){
        return (
            <div className="outer-container half-container">
                <h1>Tabs</h1>
                <div id="tabs">
                    <span className="tab" onClick={(e)=>{
                        console.log(this.state)
                        this.setState({index: 0})
                    }}>one</span>
                    <span className="tab" onClick={(e)=>{
                        this.setState({index: 1})
                    }}>two</span>
                    <span className="tab" onClick={(e)=>{
                        this.setState({index: 2})
                    }}>three</span>
                </div>
                <div className="content">
                    <span>{this.tabs[this.state.index].content}</span>
                </div>
            </div>
        )
    }
}

export default Tabs