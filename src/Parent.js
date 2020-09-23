import React from 'react';
import Child from './Child'
import Child2 from './Child2'

function Parent() {
    return(
        <div>
            Hey there You are in Parent
            <Child/>
            <Child2/>

        </div>
    )
}
 export default Parent;