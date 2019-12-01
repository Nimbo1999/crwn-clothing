import React from 'react';

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
                cartItems.map(cartItem => cartItem.name)
            }
            <div className="total">
                <span>TOTAL: R${total},00</span>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);