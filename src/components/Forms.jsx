import React, { PureComponent,useState } from 'react'
 function Forms ()
 {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleClick = () =>
        {
            if(!email || !password)
                {
                   console.log("Required Fields")
                }
                else
                {
                    console.log(email);
                    console.log(password);
                }

        }

    return (
        <div>
            <div>
                <input type="text" onChange={(e) => {setEmail(e.target.value)}} placeholder='email'  />
            </div>
            <div>

                <input type="text" onChange={(e) => {setPassword(e.target.value)}} placeholder='password'/>
            </div>
            <button  onClick={handleClick}>Click
            </button>
        </div>
    )
 }

 export default Forms;