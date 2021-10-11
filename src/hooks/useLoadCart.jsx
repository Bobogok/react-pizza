import { useEffect, useState } from 'react';
import axios from 'axios';

import emptyCart from '../assets/img/empty-cart.png';
import completeCart from '../assets/img/complete-cart.jpg';

function useLoadCart() {
  const [rowEmptyCart, setRowEmptyCart] = useState();
  const [rowCompleteCart, setRowCompleteCart] = useState();

  const fetchImage = async (url, setProp) => {
    const { data } = await axios.get(url, {
      responseType: 'arraybuffer'
    });
    return setProp(Buffer.from(data, 'binary').toString('base64'));
  };

  useEffect(() => {
    try {
      (async () => {
        await Promise.all([fetchImage(emptyCart, setRowEmptyCart), fetchImage(completeCart, setRowCompleteCart)]);
      })();
    } catch (e) {
      console.error(`Ошибка при запросе данных ${e}`);
    }
  }, []);

  return { rowEmptyCart, rowCompleteCart };
}

export default useLoadCart;
