import React, { useState } from 'react';

export default function EmailSignup() {
    const [email, setEmail] = useState();

    const submit = (e) => {
        e.preventDefault();
        console.log(email);

    }

    return (
        <>
            {/* <div id="mc_embed_signup"> */}
            <form action="https://taramartello.us17.list-manage.com/subscribe/post?u=388b4c4e898214aaf5d7be920&amp;id=9a1f10895f" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate footerform" target="_blank" noValidate>
                <h2>Sign up for my Newsletter!</h2>
                {/* <p>Life, Mindfulness and Love</p> */}
                <div id="mc_embed_signup_scroll">
                    {/* <label htmlFor="mce-EMAIL"></label> */}
                    <input
                        type="email"
                        value={email}
                        name="EMAIL"
                        className="email"
                        id="mce-EMAIL"
                        placeholder="Enter email"
                        // required 
                        onChange={e => setEmail(e.target.value)} />

                    <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
                        <input type="text" name="b_388b4c4e898214aaf5d7be920_9a1f10895f" tabIndex="-1" value="" />
                    </div>

                    {/* <div class="clear"> */}
                    <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" />
                    {/* </div> */}
                </div>
            </form>
            {/* </div> */}
            {/*  */}




            {/* <form className='footerform' onSubmit={submit}> <br></br>
                <h2>Sign up for my Newsletter!</h2>
                <p>(description of newsletter)</p>
                <label htmlFor='register-email'></label>
                <input
                    id='register-email'
                    type='email'
                    placeholder='Enter Email'
                    onChange={e => setEmail(e.target.value)}
                />
                <input type='submit' value='Signup' />
            </form> */}
        </>
    )
}
