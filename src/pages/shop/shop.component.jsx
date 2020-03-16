import React from 'react';
import { Route } from 'react-router-dom';
// Components
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../category/collection.component';
// Firebase
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'
// Redux
import { connect } from 'react-redux'
import { updateCollections } from '../../redux/shop/shop.actions'

class ShopPage extends React.Component {
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props
        const collectionRef = firestore.collection('collections');
        collectionRef.onSnapshot(async snapshot => {
            const collection = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collection);
        })
    }

    render() {

        const { match } = this.props;

        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionsOverview} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);