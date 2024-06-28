import React, { PureComponent,useState } from 'react'
 function Btn ()
 {
    const [count, setCount] = useState(true);
    const [clr, setClr] = useState('bg-slate-200');
    const handleClick = () =>
        {
            if(count===true)
                {
                    setCount(false);
                    setClr('bg-white');
                }
                else
                {
                    setCount(true);
                    setClr('bg-slate-200')
                }

        }
    return (
        <div>

            <button className={clr} onClick={handleClick}>
Click
            </button>
        </div>
    )
 }

 export default Btn;
