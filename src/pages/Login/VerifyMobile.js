import Modal from "../../components/UI/Modal";
import Close from "../../assets/images/close.png";

const VerifyMobile = (props) => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.onSent();
  };
  return (
    <Modal>
      <form action="" onSubmit={onSubmitHandler}>
        <div className="my-4">
          <div>
            <label
              for="website"
              className="block mb-2 text-sm md:text-base font-medium text-gray-900"
            >
              Enter OTP send to your mobile
            </label>
            <input
              type="tel"
              id="otp"
              className="block w-full p-2.5 md:text-base bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-[#249e24]"
              placeholder="Enter OTP"
              required
            />
          </div>
        </div>
        <div className="w-full text-center">
          <button
            type="submit"
            className="text-sm md:text-base text-white bg-[#006400] hover:bg-[#055a05] focus:ring-4 focus:outline-none focus:ring-[#2e8a2e] font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Verify
          </button>
        </div>
        <button className="absolute top-2 right-2 w-6" onClick={props.onSent}>
          <img src={Close} alt="close" />
        </button>
      </form>
    </Modal>
  );
};
export default VerifyMobile;
