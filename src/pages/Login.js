import React, { useState } from "react";
import { useAuth } from "./AuthProvider";
export default function Login()
{

  const [username,setuser]=useState("");
  const [password,setpass]=useState("");
  const auth = useAuth();
  const handlesubmit=async(e)=>{
    e.preventDefault();
    if (username !== "" && password !== "") {
      const input={
        email:username,
        password:password
      }
      auth.loginAction(input);
      return;
    }
    alert("pleae provide a valid input");
  }

    return(
        <>
      
<div class="gcse-search"></div>
        <h1>Login</h1>
        <form onSubmit={handlesubmit}>
  <div class="imgcontainer">
    
  </div>

  <div class="container">
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required value={username} onChange={(e)=>setuser(e.target.value)} />

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required value={password} onChange={(e)=>setpass(e.target.value)} />

    <button type="submit">Login</button>
    <label>
      <input type="checkbox" checked="checked" name="remember"/> Remember me
    </label>
  </div>

  <div class="container" >
    
    <span class="psw">Forgot <a href="#">password?</a></span>
  </div>
</form>
</>
    )
}