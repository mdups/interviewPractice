import { React } from 'react';

const Circle = (props) => {
    return <div style={{
        position: 'absolute',
        left: props.x - 25,
        top: props.y - 25,
        height: '50px',
        width: '50px',
        borderRadius: '50%',
        backgroundColor: props.color
    }}></div >
}
export default Circle