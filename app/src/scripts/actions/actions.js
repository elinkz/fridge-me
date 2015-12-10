import AppConstants from '../constants/constants';
import { dispatch, register } from '../dispatchers/dispatcher';

export default {
  addItem( item ){
    dispatch({
      actionType: AppConstants.ADD_ITEM, 
      item
    })
  },
  removeItem( item ){
    dispatch({
      actionType: AppConstants.REMOVE_ITEM, 
      item
    })
  }
}