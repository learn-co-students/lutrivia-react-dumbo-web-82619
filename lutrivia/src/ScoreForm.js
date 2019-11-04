import React from 'react';

export default class ScoreForm extends React.Component{

    render(){
        return(
            <div>
                <form>
                    <label>Name:</label><input></input>
                    <input type='submit' value='Submit Score'></input>
                </form>
            </div>
        )
    }
}