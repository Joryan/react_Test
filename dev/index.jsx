import React , {Component} from "react";
import ReactDOM from "react-dom";

class HelloWorld extends React.Component{
    render(){
        return (
            <p>Hello, {this.props.greetTarget}!</p>
        );
    }
}


ReactDOM.render(
    <div>
        <HelloWorld greetTarget="Batman"/>
        <HelloWorld greetTarget="Iron Man"/>
        <HelloWorld greetTarget="Catwoman"/>
        <HelloWorld greetTarget="Mega Man"/>
    </div>,
    document.querySelector("#container")

);


