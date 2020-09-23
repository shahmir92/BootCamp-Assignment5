import React from 'react';
import ValueContext from './ValueContext';

function Child() {
    let value = React.useContext(ValueContext);
    return(
        <div>
            YOU ARE IN CHILD VARIABLE PASSED TO CHILD IS : {value} 
        </div>
    );
}
 export default Child;