import Modal from "../../components/UI/Modal";
import Close from "../../assets/images/close.png";

const Register = (props) => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.onSent();
  };
  return (
    <Modal>
      <form action="" onSubmit={onSubmitHandler}>
        <div className="my-4">
          <label
            for="small"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400 md:text-base"
          >
            Gender
          </label>
          <select
            id="small"
            class="block p-2 mb-6 w-full text-sm md:text-base text-gray-900 bg-gray-50 rounded-lg border-2 focus:border-blue-500 outline-none"
          >
            <option selected>Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Felmale</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label
            for="visitors"
            class="block mb-2 text-sm md:text-base font-medium text-gray-900 dark:text-gray-300"
          >
            Age
          </label>
          <input
            type="number"
            id="visitors"
            class="block w-full p-2.5 text-sm md:text-base bg-gray-50 border border-gray-300 text-gray-900 rounded-lg  focus:outline-blue-500"
            placeholder=""
            required
          />
        </div>
        <div className="w-full text-center mt-5">
          <button
            type="submit"
            className="text-sm md:text-base text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Register
          </button>
        </div>
        <button className="absolute top-2 right-2 w-6" onClick={props.onSent}>
          <img src={Close} alt="close" />
        </button>
      </form>
    </Modal>
  );
};
export default Register;
