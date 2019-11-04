import React from 'react';
import Header from './Header';
import QuestionsContainer from './QuestionsContainer'
import ScoreForm from './ScoreForm';
import questions from './data';

class App extends React.Component {

  constructor(){
    super()
    this.state={
      currentQ: '',
      score: 0
    }
  }

  updateScore = (question, arg) => {
    let num
    const selectedQ = questions.questions.find(q => q.text === question)
    if (this.state.currentQ !== selectedQ.text){
      selectedQ.answer === arg ? num = 1 : num = 0
      this.setState({
        currentQ: selectedQ.text,
        score: this.state.score + num
      })
    }
  }

  render (){
    return (
      <div>
        <p>Lutrivia</p>
        <Header currentScore={this.state.score}/>
        <QuestionsContainer {...questions} updateScore={this.updateScore}/>
        <br/>
        <ScoreForm currentScore={this.state.score}/>
      </div>
    );
  }
}
export default App;
