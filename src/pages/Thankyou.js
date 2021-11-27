import React from 'react'
import '.././styles/thankyou.css';

const Thankyou = () => {
    return (
        <div className="container">
            <div className="confirmation">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2qmcZLJkL-ocymudwQIFmjkyHc5voTX4reg&usqp=CAU" alt=""/>
                <h3>Thank you for Shopping with us!</h3>
            </div>
            <div className="confirmTxt">
                <p>Order number: #......</p>
                <p>Date of delivery: 22 October - 25 October</p>
            </div>
            <div className="btn">
                <button>Sign Out</button>
                <button>Continue Shopping</button>
            </div>
        </div>
    )
}

export default Thankyou;
