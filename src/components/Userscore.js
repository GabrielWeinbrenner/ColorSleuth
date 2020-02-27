import React from 'react';

class Userscore extends React.Component{
    userOutput = () => {
        if((this.props.currentUser + 1) == this.props.id){
            return(
                <div className="user-score-active">
                    <h3 className="title-score">User {this.props.id} Score:</h3>
                    <h4 className="individual-score">
                    {this.props.userscore}
                    </h4>
                </div>
            );
        }else{
            return(
            <div className="user-score">
                <h3 className="title-score">User {this.props.id} Score:</h3>
                <h4 className="individual-score">
                {this.props.userscore}
                </h4>
            </div>
            );
        }
    }
    render(){
        return(
            this.userOutput()
        );
    }
}

export default Userscore;