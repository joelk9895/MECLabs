import {auth, provider} from './Firebase';
import { signInWithPopup} from 'firebase/auth';
import React, {useEffect, useState} from 'react';
import Dashboard from './Dashboard';
import Landing from './Landing';




 
export const SignIn =() =>{
    const [value,setvalue] = useState('')
    const handleClick = () => {
        signInWithPopup(auth,provider).then((data) => {
            setvalue(data.user)
            localStorage.setItem('email',data.user.email)
            localStorage.setItem('name',data.user.displayName)
            localStorage.setItem('photo',data.user.photoURL)
    }).catch((error) => {
        console.log(error)
    })
}
useEffect(() => {
    const email = localStorage.getItem('email')
    setvalue(email)
})


return (
    <div>
        {value?<Dashboard/>:
        <Landing handle = {handleClick}/>}
    </div>  
);}

 export default SignIn;