import React from 'react';

import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'
import CheckouItem from '../../components/checkout-item/checkout-item.component'

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, total }) => {
    return(
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Produto</span>
                </div>
                <div className="header-block">
                    <span>Descrição</span>
                </div>
                <div className="header-block">
                    <span>Quantidade</span>
                </div>
                <div className="header-block">
                    <span>Preço</span>
                </div>
                <div className="header-block">
                    <span>Remover</span>
                </div>
            </div>
            {
                cartItems.map(cartItem => <CheckouItem key={cartItem.id} cartItem={cartItem} />)
            }
            <div className="total">
                <span>TOTAL: R${total},00</span>
            </div>
            <p className='stripe-warning'>*Please use the following test credit card for payments*</p>
            <p className='stripe-warning'>4000 0007 6000 0002 ----- Exp: 01/21 ------ CVV: 123</p>
            <StripeCheckoutButton price={total} />
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);