import React from 'react';

export default class Question extends React.Component{

    constructor(){
        super()
        this.state={
            answer: ''
        }
    }


    answerTrue = () => {
        if (this.state.answer !== true){
        this.setState({
            answer: true
        })
        this.props.updateScore(this.props.text, true)}
        else{
            this.setState({
                answer: true
            })
        }
    }

    answerFalse = () => {
        if (this.state.answer !== false){
        this.setState({
            answer: false
        })
        this.props.updateScore(this.props.text, false)}
        else{
            this.setState({
                answer: false
            })
        }
    }

    render(){
        return(
            <div>
                <h3>{this.props.text}</h3>
                <button onClick={this.answerTrue} style={this.state.answer === true ? {background: 'red' }: {background: 'none'}}>True</button>
                <button onClick={this.answerFalse} style={this.state.answer === false ? {background: 'blue' }: {background: 'none'}}>False</button>
            </div>
        )
    }
}
