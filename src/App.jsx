import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileCard from "./ProfileCard";
import { UserProvider } from "./UserContext";

function App() {


  return (
    <>
       <UserProvider>
      <ProfileCard />
    </UserProvider>
    </>
  )
}

export default App
