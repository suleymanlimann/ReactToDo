import React from 'react'

function Medium() {
    const element = React.createElement( 
        'h1',{className: 'greeting'},  'Bu bir medium yazısıdır.'
    );

    return (
        <div>
            {element}
        </div>
    )

    export default Medium;
}
