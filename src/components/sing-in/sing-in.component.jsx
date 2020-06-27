import React from 'react'

import './sing-in.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { auth } from '../../firebase/firebase.utils'

import { connect } from 'react-redux'
import { googleSignInStart } from '../../redux/user/user.actions'

class SingIn extends React.Component {
    constructor(){
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        const { email, password } = this.state;
        event.preventDefault();
        try {
            await auth.signInWithEmailAndPassword(email, password);

            this.setState({email: '', password: ''});
        } catch(e) {
            console.error(e)
        }
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        })
    }

    render(){

        const { googleSignInStart } = this.props;

        return (
            <div className="sing-in">
                <h2>Já possui uma conta?</h2>
                <span>Entre com seu email e senha</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email" value={this.state.email} handleChange={this.handleChange} label="Email" required />
                    <FormInput type="password" name="password" value={this.state.password} handleChange={this.handleChange} label="Senha" required />
                    <div className="buttons">
                        <CustomButton type="submit">Login</CustomButton>
                        <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>Login com Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart())
})

export default connect(null, mapDispatchToProps)(SingIn);
