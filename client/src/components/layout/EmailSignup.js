import React, { useState } from 'react';

export default function EmailSignup() {
    const [email, setEmail] = useState();

    const submit = (e) => {
        e.preventDefault();
        console.log(email);

    }

    return (
        <>
            <form className='footerform' onSubmit={submit}> <br></br>
                <h2>Sign up for my Newsletter!</h2>
                <p>(description of newsletter)</p>
                {/* <label htmlFor='register-email'></label> */}
                <input
                    id='register-email'
                    type='email'
                    placeholder='Enter Email'
                    onChange={e => setEmail(e.target.value)}
                />
                <input type='submit' value='Signup' />
            </form>
        </>
    )
}
