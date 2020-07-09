import React from 'react'
import { useLocation, Link } from 'react-router-dom';

import './collection-preview.styles.scss'
import CollectionItem from '../collection-item/collection-item.component'

const CollectionPreview = ( {title, items, routeName} ) => {

    const { pathname } = useLocation();

    return (
        <div className="collection-preview">
            <Link to={`${pathname}/${routeName}`} className="title">{ title.toUpperCase() }</Link>
            <div className="preview">
                {items
                    .filter((item, idx) => idx < 4)
                    .map( (item) => (
                        <CollectionItem key={item.id} item={item} />
                    ))}
            </div>
        </div>
    );
}

export default CollectionPreview
