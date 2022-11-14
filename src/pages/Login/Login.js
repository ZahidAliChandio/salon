import Modal from "../../components/UI/Modal";
import Close from "../../assets/images/close.png";

const Login = (props) => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.onClose();
    props.sendOtp();
  };
  return (
    <Modal>
      <form action="" onSubmit={onSubmitHandler}>
        <div className="mt-4 mb-6">
          <label
            for="phone"
            class="block mb-2 text-sm md:text-base font-medium text-gray-900"
          >
            Enter your Mobile Number
          </label>
          <div className="flex">
            <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              <i class="fas fa-phone-alt"></i>
            </span>
            <input
              type="tel"
              id="phone"
              className="block w-full p-2.5 text-sm md:text-base bg-gray-50 border-2 border-gray-300 text-gray-900 rounded-r-lg focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="123-45-678"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required
            />
          </div>
        </div>
        <div className="w-full text-center">
          <button
            type="submit"
            className="text-sm md:text-base text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Send OTP
          </button>
        </div>
        <button className="absolute top-2 right-2 w-6" onClick={props.onClose}>
          <img src={Close} alt="close" />
        </button>
      </form>
    </Modal>
  );
};
export default Login;
