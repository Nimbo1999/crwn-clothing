import React from 'react';
import { Route } from 'react-router-dom';
// Components
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import ColectionsPageContainer from '../category/collection.container';
// Redux
import { connect } from 'react-redux'
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions'


class ShopPage extends React.Component {

    componentDidMount() {
        const { fetchCollectionsStartAsync } = this.props
        fetchCollectionsStartAsync()
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

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(null, mapDispatchToProps)(ShopPage);