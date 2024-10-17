import { ToastContainer } from 'react-toastify'

const ToastShow = () => {
  return (
    <ToastContainer
    position="top-right"
    autoClose={1500}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"
    style={{ top: "10px" }}
  />
  )
}

export default ToastShow
