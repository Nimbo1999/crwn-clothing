import { CartActionTypes } from './cart.types'

const INITIAL_STATE = {
  hidden: true
};

const cartReducer = (prevState = INITIAL_STATE, action) => {
  switch (action.type){
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...prevState,
        hidden: !prevState.hidden
      }

    default:
      return prevState
  }
}

export default cartReducer;
