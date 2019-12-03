import React from 'react';

import { connect } from 'react-redux';
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.action';

import './checkout-item.styles.scss';

const CheckouItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    const { name, quantity, imageUrl, price } = cartItem

    const STYLE = {
        pointerEvents: 'none',
        visibility: 'hidden'
    }

    return (
        <div className='checkout-item'>
            <div className="image-container">
                <img src={imageUrl} alt='item' />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" style={cartItem.quantity < 2 ? STYLE : null } onClick={() => removeItem(cartItem)}>&#10096;</div>
                <span className='value'>{quantity}</span>
                <div className="arrow" onClick={() => addItem(cartItem)}>&#10097;</div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => clearItem(cartItem)}>
                &#10005;
            </div>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckouItem);