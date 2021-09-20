import axios from 'axios';
import React, { useRef } from 'react'


const SignUp = props => {

    const nameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    var tokenPrint = <p></p>

    const SignUp = () => {
        axios.post("http://localhost:8080/v1/user", {
            name: nameRef.current.value,
            lastName: lastNameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            rol: "USER"
        }).then(response => {
            alert("Success!!")
            console.log(response);
            tokenPrint = <p>${response.data}</p> 
        }).catch(error => {
            console.log(nameRef.current.value,lastNameRef.current.value,emailRef.current.value);
            alert(error);
            tokenPrint = <p>${error}</p>
        });
    }

    

    return(
        <div>
            <h1>Register!!</h1>
            <label>Name</label>
            <input ref={nameRef}/>
            <label>Last Name</label>
            <input ref={lastNameRef}/>
            <label>Email</label>
            <input ref={emailRef}/>
            <label>Password</label>
            <input type="password" ref={passwordRef}/>
            <button onClick={SignUp}>Create Account</button>
            {tokenPrint}
        </div>
    );
}

export default SignUp;