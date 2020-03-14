import React from 'react'

function UserItem(props) {
    const {name, email, isGoldClient } = props;
    
    return (
      <div>
          <h2>name: {name}</h2>
          <p>email: {email}</p>
          {
            isGoldClient
              ? <p>Client Gold</p> 
              : null
          }
      </div>  
    );
}

export default UserItem;
