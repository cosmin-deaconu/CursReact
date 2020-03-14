import React from 'react'

function UserAddForm() {

    return (
        <div>
            <div>
                <label>name:</label>
                <input type="text" name="name"/>
            </div>
            <div>
                <label>email:</label>
                <input type="text" name="email"/>
            </div>
            <div>
                <input type="submit" value="Submit"/>
            </div>
        </div>
    );
}

export default UserAddForm;
