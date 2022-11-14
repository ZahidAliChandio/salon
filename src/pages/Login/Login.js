import Modal from "../../components/UI/Modal";
import Close from "../../assets/images/close.png";

const Login = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div className="my-4">
        <label
          for="phone"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Enter your Mobile Number
        </label>
        <input
          type="tel"
          id="phone"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="123-45-678"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          required
        />
      </div>
      <div className="w-full text-center">
        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Send OTP
        </button>
      </div>
      <button
        className="absolute top-2 right-2 w-6"
        onClick={props.onClose}
      >
        <img src={Close} alt="close" />
      </button>
    </Modal>
  );
};
export default Login;
