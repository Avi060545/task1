import React, { PureComponent,useState } from 'react'
function Counter()
{

    const [count, setCount] = useState(0);
    return (
        <div>
            <div>
<button onClick={setCount(count+1)}> Increase
</button>
<div>
{count}
</div>
<button onClick={setCount(count+1)}> Decrease
</button>
</div>
        </div>
    )
}

export default Counter;