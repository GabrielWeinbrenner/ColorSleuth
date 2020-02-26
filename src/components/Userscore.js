import React from 'react';

class Userscore extends React.Component{
    render(){
        return(
            <div className="user-score">
                User Score: {this.props.userscore}
            </div>
        );
    }
}

export default Userscore;