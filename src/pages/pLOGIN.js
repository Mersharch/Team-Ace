import React from 'react';
import lButtons from '../components/Login/lButtons';
import lFillIn from '../components/Login/lFillIn';
import lLogo from '../components/Login/lLogo';
import '../styles/login.css'

function pLOGIN() {
    return (
        <div className='container'>
            <form className='form'>
                <lLogo />
                <lFillIn />
                <lButtons />
                <h3>Don't have an account?<a href="#" className="caa"> Create an account</a></h3>
            </form>

        </div>
    );
}

export default pLOGIN;
