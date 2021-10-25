import { uiAction } from './ui-slice';
import { cartAction } from './cart-slice';

// ==========fetch data function========
export const fetchCartData = () => {
  return async dispatch => {
    const fetchData = async () => {
      const res = await fetch(
        'https://redux-http-57bf5-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json'
      );

      if (!res.ok) {
        throw new Error('Could not fetch cart data..');
      }

      const data = res.json();

      return data;

      //   ======
    };

    try {
      const cartData = await fetchData();
      dispatch(
        cartAction.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (err) {
      dispatch(
        uiAction.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Fetching cart data failed....',
        })
      );
    }
  };
};

// ========== sending cart data function=======
export const sendCartData = cart => {
  return async dispatch => {
    dispatch(
      uiAction.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data....',
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        'https://redux-http-57bf5-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Something went wrong..!');
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiAction.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent cart data successfully....',
        })
      );
    } catch (err) {
      dispatch(
        uiAction.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed....',
        })
      );
    }

    // =======
  };
};
