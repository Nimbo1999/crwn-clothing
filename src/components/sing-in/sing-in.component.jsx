import React from 'react'

import './sing-in.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { singInWithGoogle } from '../../firebase/firebase.utils'

class SingIn extends React.Component {
    constructor(){
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            email: '',
            password: ''
        });
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        })
    }

    render(){
        return (
            <div className="sing-in">
                <h2>Já possui uma conta?</h2>
                <span>Entre com sua senha e email</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email" value={this.state.email} handleChange={this.handleChange} label="Email" required />
                    <FormInput type="password" name="password" value={this.state.password} handleChange={this.handleChange} label="Senha" required />
                    <div className="buttons">
                        <CustomButton type="submit">Login</CustomButton>
                        <CustomButton type="button" onClick={singInWithGoogle} isGoogleSignIn>Login com Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SingIn;