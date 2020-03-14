import React from 'react';
import UserItem from './UserItem'

class UserList extends React.Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    componentWillMount(){
        console.log("UserItem did mount")
    }

    render() {
        return (
            <div>
                {
                    this.props.users.map((user, index) => {
                        return (
                            <UserItem 
                                key={index}
                                name={user.name}
                                email={user.email}
                                isGoldClient={user.isGoldClient}
                            />
                        );
                    })
                }
            </div>
        );
    }

}

export default UserList;
