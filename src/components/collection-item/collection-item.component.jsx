import React from 'react'
import { connect } from 'react-redux'

import CustomButton from '../custom-button/custom-button.component'
import { addItem } from '../../redux/cart/cart.action'

import './collection-item.styles.scss'

const CollectionItem = ( {item, addItem} ) => {

    const {name, price, imageUrl} = item;

    return (
    <div className="collection-item">

        <div className="image" style={{
            backgroundImage: `url(${imageUrl})`
        }} />

        <div className="collection-footer">
            <div className="name">{name}</div>
            <div className="price">R${price}</div>
        </div>

        <CustomButton inverted onClick={() => addItem(item)}> Add to cart</CustomButton>

    </div>
)}

const MapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, MapDispatchToProps)(CollectionItem);
