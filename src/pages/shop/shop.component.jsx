import React from 'react';
import { Route } from 'react-router-dom';
// Components
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import ColectionsPageContainer from '../category/collection.container';
// Redux
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { fetchCollectionsStart } from '../../redux/shop/shop.actions'
import { selectShopCollections } from '../../redux/shop/shop.selectors'


class ShopPage extends React.Component {

    componentDidMount() {
        const { fetchCollectionsStart, collections } = this.props
        if (collections === null) fetchCollectionsStart();
    }

    render() {

        const { match } = this.props;

        return (
            <div className="shop-page">
                <Route
                    exact
                    path={`${match.path}`}
                    component={CollectionsOverviewContainer}
                />
                <Route
                    path={`${match.path}/:collectionId`}
                    component={ColectionsPageContainer}
                />
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections
})

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);