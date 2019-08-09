import React, { useContext } from 'react'

import { Themes } from '../App'

const Div = props => {

    const col = () => props.setColor(props.color === 'black' ? 'whitesmoke' : 'black')

    return <div
        onClick={() => col()}
        style={{
            background: `${useContext(Themes)}`,
            width: '100%',
            height: '2px'
        }} />
}

export default Div
