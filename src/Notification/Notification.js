import React from 'react'

import {Alert} from 'reactstrap'

const Notification = (props) => { 
    const color = props.color
    const visibleProps = props.visible
    const [visible, setVisible] = React.useState(visibleProps);

    const onDismiss = () => {  
        setVisible(false);
    }

    return(
        <Alert color={color} isOpen={visible} toggle={onDismiss}>
            This is a dark alert — check it out!
        </Alert>
    )
} 

export default Notification