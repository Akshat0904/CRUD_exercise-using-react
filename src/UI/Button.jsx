/* eslint-disable react/prop-types */
const Button = ({ bgColor, children, clickHandler, addDisable }) => {
  const color = bgColor;
  bgColor = `text-white font-Poppins font-medium font-semibold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ${color}`;

  return (
    <button
      type="button"
      className={bgColor}
      onClick={clickHandler}
      disabled={addDisable}
    >
      {children}
    </button>
  );
};

export default Button;
