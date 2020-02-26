import React from 'react';

class Card extends React.Component{
    checkIfCorrect = () => {
        if(this.props.rand == this.props.id){
            this.props.changeUserScore(true);
        }else{
            this.props.changeUserScore(false);
        }
    }
    render(){
        return(
            <div onClick={this.checkIfCorrect} style={this.props.color} className="card" id={this.props.id}>
            </div>
        );
    }
}

export default Card;