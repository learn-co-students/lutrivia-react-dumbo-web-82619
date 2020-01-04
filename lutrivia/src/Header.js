import React from 'react';

export default class Header extends React.Component{

    render(){
        return(
            <div>
                <button>New Game</button>
                <p>Score: {this.props.currentScore}</p>
            </div>
        )
    }
}