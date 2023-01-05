import React from "react";
import css from './css/NavBarSimple.module.css';

class NavBarSimple extends React.Component{
    constructor(props){
    super(props);
    this.state = {
        message: 'hello guest',
        buttonMessage:'login',

        }
    }

    handleClick() {
        this.setState((prevState, prevProps) =>({
                message: prevState.message ==='hello guest'?'welcome back user':'hello guest',
                buttonMessage: prevState.buttonMessage === 'login'?'logout':'login',

            
                
            
        }), ()=> console.log(this.state.message))
    }

    render(){
        return(
            <div className = {css.NavBar}>
                <h1>My gallery</h1>
                <span>{this.state.message}
                    <button onClick={() => this.handleClick()}>{ this.state.buttonMessage}</button>
                </span>

            </div>
        )
    }
}

export default NavBarSimple