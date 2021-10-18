import React from 'react';

function lButtons() {
    return (
        <div className="buttons">
            <button type="submit" className="login"><label className="l"> Login </label></button><br></br>
            <button className="login-g"><img src="IMG_1665.PNG" alt="google logo"  className="g-logo" /> <label className="l-g" > Login With Google </label></button><br></br>
            <button className="login-a"><img src="IMG_1664.PNG" alt="apple logo" className="a-logo" /><label className="l-a" > Login With Apple  </label></button>
   

        </div>
    );
}

export default lButtons;