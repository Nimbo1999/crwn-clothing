import React, { useState } from 'react'

import './sing-in.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { connect } from 'react-redux'
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions'

const SignIn = ({ googleSignInStart, emailSignInStart }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async event => {
        event.preventDefault();
        await emailSignInStart({email, password});
    }

    return (
        <div className="sing-in">
            <h2>Já possui uma conta?</h2>
            <span>Entre com seu email e senha</span>

            <form onSubmit={handleSubmit}>
                <FormInput type="email" name="email" value={email} handleChange={e => setEmail(e.target.value)} label="Email" required />
                <FormInput type="password" name="password" value={password} handleChange={e => setPassword(e.target.value)} label="Senha" required />
                <div className="buttons">
                    <CustomButton type="submit">Login</CustomButton>
                    <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>Login com Google</CustomButton>
                </div>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: emailAndPassword => dispatch(emailSignInStart(emailAndPassword))
})

export default connect(null, mapDispatchToProps)(SignIn);
