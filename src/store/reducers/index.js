import {actionType} from '../ActionTypes';
export const initialState = {
  token_data: {},
  user_info: {},
  all_users: [],
  product_info: {},
  all_products: [],
  product_details: {},
  cart: [],
  wish_list: [],
  seller_info: {},
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_INITIAL_STATE:
      return {
        ...initialState,
      };
    case actionType.SET_USER_INFO:
      return {
        ...state,
        user_info: action.payload,
      };
    case actionType.SET_TOKEN:
      return {
        ...state,
        token_data: action.payload,
      };
    case actionType.SET_ALL_USERS:
      return {
        ...state,
        all_users: action.payload,
      };
    case actionType.SET_PRODUCT_INFO:
      return {
        ...state,
        product_info: action.payload,
      };
    case actionType.SET_ALL_PRODUCTS:
      return {
        ...state,
        all_products: action.payload,
      };
    case actionType.SET_PRODUCT_DETAILS:
      return {
        ...state,
        product_details: action.payload,
      };
    case actionType.SET_CART:
      return {
        ...state,
        cart: action.payload,
      };
    case actionType.WISH_LIST:
      return {
        ...state,
        wish_list: action.payload,
      };
    case actionType.SET_SELLER_INFO:
      return {
        ...state,
        seller_info: action.payload,
      };
    default:
      return state;
  }
};
