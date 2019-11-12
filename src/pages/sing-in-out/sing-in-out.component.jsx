import React from 'react'

import './sing-in-out.styles.scss'
import SingIn from '../../components/sing-in/sing-in.component'
import SignUp from '../../components/sing-up/sing-up.component'

const SingInOut = () => {
    return (
        <div className="sing-in-and-sing-up">
            <SingIn />
            <SignUp />
        </div>
    )
}

export default SingInOut
