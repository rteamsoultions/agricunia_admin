
import { IS_TOGGLE_MENU } from '../type';

// export const setToggleMenu = (value) => (dispatch) => {
//   dispatch({
//     type: IS_TOGGLE_MENU,
//     payload: value,
//   });
// };



export const setToggleMenu = (value) => async (dispatch) => {
    try {
        console.log("action value",value);
      dispatch({
        type: IS_TOGGLE_MENU,
        payload: value,
      });
 
    } catch (error) {

  
      dispatch({
        type: IS_TOGGLE_MENU,
        payload: false
      });
    }
  };
