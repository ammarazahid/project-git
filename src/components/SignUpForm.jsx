import React from 'react';

function SignUpForm(){
    return(
<section id="first">
        <div id="left-para">
            <h1> Built for developers </h1>
            <p> GitHub is a development platform inspired by the way you work.From <a href="#">open
                source</a> to <a href="#">business</a>, you can host and review code,
                manage projects, and build software alongside 40
                million developers. </p>
        </div>
        <div id="right-form">
            <form>
                <label> User Name </label><br/>
                <input id="username" type="name" for="name" required /><br/>
                <label> Email </label><br/>
                <input id="email" type="Email" for="email" required /><br/>
                <label> Password </label><br/>
                <input id="password" type="password" for="password" />
                <p>Make sure it's at least 15 characters OR at least 8 characters including a number and a lowercase
                    letter.<a href="#">Learn more.</a></p>
                <button id="sign-git-btn"> Sign up for Github </button>
                <p id="sign-git-a"> By clicking “Sign up for GitHub”, you agree to our
                    <a href="#">Terms of Service </a>and<a href="#"> Privacy Statement</a>.We’ ll occasionally send
                    you account related emails.
                </p>
            </form>
        </div>
    </section>
    )
}

export default SignUpForm;