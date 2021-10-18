import React from 'react';

function lFillIn() {
    return (
        <div className='log-FI'>
            <label> Email: </label>
            <input type='email' className='mail' placeholder='johnkennedy23@gmail.com' />
            <label> Password: </label>
            <input type="password" placeholder="at least 10 characters" className="pword" /> <br></br>
            <label> Confirm: </label>
            <input type="password" placeholder="at least 10 characters" className="cpword" />
        </div>
    );
}

export default lFillIn;