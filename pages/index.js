import Head from 'next/head'
import "../flow/config";
import { useState, useEffect } from "react";
import * as fcl from "@onflow/fcl";

export default function Home() {

  const [user, setUser] = useState({loggedIn: null})

  useEffect(() => fcl.currentUser.subscribe(setUser), [])

  const AuthedState = () => {
    return (
      <center>
      <div style={{backgroundColor:"white", height:"300px", width:"300px",borderRadius:"20px" }}>
        <div>Address: {user?.addr ?? "No Address"}</div>
        <button onClick={fcl.unauthenticate} style={{width:200, 
        backgroundColor:"white",
        color:"black", 
        borderRadius:20,
        fontSize:20,
        height:"50px"}} >Log Out</button>
      </div>
      </center>
    )
  }

  const UnauthenticatedState = () => {
    return (
      <center>
      <div style={{backgroundColor:"white", height:"300px", width:"300px", borderRadius:"20px"}}>
     
        <button style={{width:200, 
        backgroundColor:"white",
        color:"black", 
        borderRadius:20,
        fontSize:20,
        marginTop:'30px',
        height:"50px"}} onClick={fcl.logIn}>Log In</button>
        <button 
        style={{width:200, 
        backgroundColor:"#183DE7",
        color:"black", 
        fontSize:20,
        marginTop:'30px',
        borderRadius:20,
        height:"50px"}}
        
        onClick={fcl.signUp}>Sign Up</button>
      </div>
      </center>
    )
  }

  return (
    <div>
      <Head>
        <title>FCL Quickstart with NextJS</title>
        <meta name="description" content="My first web3 app on Flow!" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <h1>Flow App</h1>
      {user.loggedIn
        ? <AuthedState />
        : <UnauthenticatedState />
      }
    </div>
  );
}