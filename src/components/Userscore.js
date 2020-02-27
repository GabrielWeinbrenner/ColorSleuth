import React from 'react';

class Userscore extends React.Component{
    render(){
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

export default Userscore;