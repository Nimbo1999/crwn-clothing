import React from 'react'

import './sing-in.styles.scss'

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
                    <labe>Email</labe>
                    <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
                    <labe>Senha</labe>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
                </form>
            </div>
        )
    }
}

export default SingIn;