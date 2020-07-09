import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
// Redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import { selectShopCollections } from '../../redux/shop/shop.selectors';

import { SpinnerContainer, SpinnerOverlay } from '../../components/with-spinner/with-spinner.styles';

const CollectionsOverviewContainer = lazy(() => import('../../components/collections-overview/collections-overview.container'));
const ColectionsPageContainer = lazy(() => import('../category/collection.container'));


const ShopPage = ({ collections, fetchCollectionsStart, match }) => {

    useEffect(() => {
        if (collections === null) fetchCollectionsStart();
    }, [collections, fetchCollectionsStart]);

    const loading = (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    )

    return (
        <div className="shop-page">
            <Suspense fallback={loading}>
                <Route
                    exact
                    path={`${match.path}`}
                    component={CollectionsOverviewContainer}
                />
                <Route
                    path={`${match.path}/:collectionId`}
                    component={ColectionsPageContainer}
                />
            </Suspense>
        </div>
    )

}

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections
})

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);