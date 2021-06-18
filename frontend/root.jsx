import React from 'react';
import Clock from './clock'
import Tabs from './tabs'

const Root = (props) =>{
    let tabs = [
        {
            title: "one",
            content: "i am the first"
        },
        {
            title: "two",
            content: "i am the second"
        },
        {
            title: "three",
            content: "i am the third"
        }
    ]
    return (
        <div className="app">
            <Clock/>
            <Tabs tabs={tabs}/>
        </div>
    )
}

export default Root;