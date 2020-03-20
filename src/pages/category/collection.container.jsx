import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'

import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors'
import WithSpinner from '../../components/with-spinner/with-spinner.component'
import ColectionsPage from './collection.component'

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionsLoaded(state)
})

const ColectionsPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(ColectionsPage)

export default ColectionsPageContainer;