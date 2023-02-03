import {ToastContainer, toast as Toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Toastify = () => {
  return (
    <ToastContainer
      position="bottom-left"
      autoClose={5000}
      closeOnClick
      pauseOnFocusLoss
      draggable
      pauseOnHover
      limit={4}
    />
  );
};

export const toast = (text, method, time = 3000) => {
  Toast[method](text, {
    position: "bottom-left",
    autoClose: time,
    closeOnClick: true,
    pauseOnHover: true,
  });
};

export default Toastify;