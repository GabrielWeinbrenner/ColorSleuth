import React from 'react';
import Card from './Card';
import Userscore from './Userscore';
import crown from '../images/crown.png';

class App extends React.Component{
    state = {
        currentColor: {background: "rgba(255,255,0)"},
        randomCardId: Math.round(Math.random()*Math.floor(4)),
        currentUser: 0,
        userOneScore: 0,
        userTwoScore: 0

    }
    checkColorId = (id) => {
        var color = this.state.currentColor.background;
        if(id === this.state.randomCardId){
            return {background: color.substring(0,color.length-1) + "," + (Math.random() * (0.5 - 0.3) + 0.3)+ ")"}
        }else{
            return {background: color}
        }
    }
    handleUserScore = (increment) => {
        if(this.state.currentUser === 0){
            var newScore = increment ? this.state.userOneScore+1: this.state.userOneScore-1;
            this.setState({
                currentColor: {background: `rgba(${Math.random()*Math.floor(255)},
                ${Math.random()*Math.floor(255)},
                ${Math.random()*Math.floor(255)})`},

                userOneScore: newScore,
                randomCardId: Math.round(Math.random()*Math.floor(4)),
                currentUser: 1
            });          
        }else{
            var newScore = increment ? this.state.userTwoScore+1: this.state.userTwoScore-1;
            this.setState({
                currentColor: {background: `rgba(${Math.random()*Math.floor(255)},
                ${Math.random()*Math.floor(255)},
                ${Math.random()*Math.floor(255)})`},

                userTwoScore: newScore,
                randomCardId: Math.round(Math.random()*Math.floor(4)),
                currentUser: 0
            });     
        }
    }
    resetGame = () => {
        this.setState({
            userOneScore: 0,
            userTwoScore: 0,
            currentUser: 0
        })
    }
    renderWin = () => {
        var currentWinner = this.state.userOneScore > this.state.userTwoScore ? "User One" : "User Two";
        return(
            <div>
                <div className="crown">
                    <img className="crown-image" src={crown} />
                </div>
                <h1 className="congrats">
                    Congratualations {currentWinner}!!
                </h1>
                <button className="reset" onClick={this.resetGame}> New Game? </button>
            </div>
        )
    }
    renderGameplay = () => {
        return(
            <div>
                <div className="cards">
                    <h1 className="welcome">Welcome to Sleuth Card</h1>
                    <Card id="1" changeUserScore = {this.handleUserScore} rand = {this.state.randomCardId} color={this.checkColorId(1)}/>
                    <Card id="2" changeUserScore = {this.handleUserScore} rand = {this.state.randomCardId} color={this.checkColorId(2)}/>
                    <Card id="3" changeUserScore = {this.handleUserScore} rand = {this.state.randomCardId} color={this.checkColorId(3)}/>
                    <Card id="4" changeUserScore = {this.handleUserScore} rand = {this.state.randomCardId} color={this.checkColorId(4)}/>
                    <div className="scores">
                        <Userscore id="1" currentUser= {this.state.currentUser} userscore={this.state.userOneScore}/>
                        <Userscore id="2" currentUser= {this.state.currentUser} userscore={this.state.userTwoScore}/>
                    </div>
                </div>
            </div>

        );
    }
    render(){
        if(this.state.userOneScore === 10 || this.state.userTwoScore === 10){
            return(this.renderWin());
        }else{
            return(this.renderGameplay());
        }

    }
}

export default App;