import React, { Component } from 'react'

class UserDetailPage extends Component {
    state = {
        FirstName: 'Ivan',
        LastName: 'Ivanov',
        Email: 'ivan87@gmail.com',
        age: 33 
}

    handleButtonClick = () => {
        this.setState(prevState => ({age: prevState.age  + 1}))
    //     this.setState({
    //        LastName: 'Pidaroc'
    //    })
    }
    
    render() {
        const {FirstName, LastName, Email, age} = this.state
    
        return (
            <div className='Users_details'>
                <h1>User Details</h1>
                <p >FirstName: {FirstName}</p>
                <p >LastName: {LastName}</p>
                <p >Email: {Email}</p>
                  <p >Age: {age}</p>
                <button onClick={this.handleButtonClick}>Load User Data</button>
            </div>
        );
    };
};

export default UserDetailPage;