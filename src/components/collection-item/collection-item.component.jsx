import React from 'react'

import CustomButton from '../custom-button/custom-button.component'

import './collection-item.styles.scss'

const CollectionItem = ( {name, price, imageUrl} ) => (
    <div className="collection-item">

        <div className="image" style={{
            backgroundImage: `url(${imageUrl})`
        }} />

        <div className="collection-footer">
            <div className="name">{name}</div>
            <div className="price">R${price},00</div>
        </div>

        <CustomButton inverted> Add to cart</CustomButton>

    </div>
)

export default CollectionItem;
