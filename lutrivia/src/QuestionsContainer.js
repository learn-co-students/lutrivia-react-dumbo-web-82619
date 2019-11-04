import React from 'react';
import Question from './Question';

export default class QuestionsContainer extends React.Component{

    render(){
        return(
            <div>
            {this.props.questions.map((question, idx) => <Question key={idx} {...question} updateScore={this.props.updateScore} currentScore={this.props.currentScore}/>)}
            </div>
        )
    }
}