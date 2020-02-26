import React from 'react';
import Card from './Card';
import Userscore from './Userscore';
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
            return {background: color.substring(0,color.length-1) + "," + (Math.random() *0.4)+ ")"}
        }else{
            return {background: color}
        }
    }
    handleUserScore = () => {
        if(this.state.currentUser === 0){
            var newScore = this.state.userOneScore+1;
            this.setState({
                userOneScore: newScore,
                randomCardId: Math.round(Math.random()*Math.floor(4)),
                currentUser: 1
            });          
        }else{
            var newScore = this.state.userOneScore+1;
            this.setState({
                userOneScore: newScore,
                randomCardId: Math.round(Math.random()*Math.floor(4)),
                currentUser: 0
            });     
        }
    }
    render(){
        return(
            <div>
                <div className="cards">
                    <h1>Welcome to Sleuth Card</h1>
                    <Card id="1" changeUserScore = {this.handleUserScore} rand = {this.state.randomCardId} color={this.checkColorId(1)}/>
                    <Card id="2" changeUserScore = {this.handleUserScore} rand = {this.state.randomCardId} color={this.checkColorId(2)}/>
                    <Card id="3" changeUserScore = {this.handleUserScore} rand = {this.state.randomCardId} color={this.checkColorId(3)}/>
                    <Card id="4" changeUserScore = {this.handleUserScore} rand = {this.state.randomCardId} color={this.checkColorId(4)}/>
                    <div className="scores">
                        <Userscore userscore={this.state.userOneScore}/>
                        <Userscore userscore={this.state.userTwoScore}/>
                    </div>
                </div>
            </div>

        );
    }
}

export default App;