import React from 'react'
import EmailSignup from '../layout/EmailSignup'

export default function Footer() {
    return (
        
        <footer className='footer' id='footer'>
            {/* <div className='footerDiv'></div> */}

            {/* <div className='footerDiv'> */}
                {/* <div className='icons'> */}
                {/* </div> */}
                {/* <h1 className='title'>Tara Martello</h1> */}
                <EmailSignup />
                <div className='icons'>
                    <a href="https://www.instagram.com/taramartello_/?hl=en" target="_blank"><i className="fab fa-instagram fa-2x"></i></a>
                    <a href='https://www.facebook.com/tara.martello.5' target="_blank"><i className="fab fa-facebook fa-2x"></i></a>
                    <a href='https://twitter.com/MartelloTara' target="_blank"><i className="fab fa-twitter fa-2x"></i></a>
                </div>
            {/* </div> */}

            {/* <div className='footerDiv'></div> */}

        </footer>

    )
}
