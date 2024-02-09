/* eslint-disable react/prop-types */
const Button = ({ bgColor, children, clickHandler }) => {
  const color = bgColor;
  bgColor = `text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ${color}`;

  return (
    <button type="button" className={bgColor} onClick={clickHandler}>
      {children}
    </button>
  );
};

export default Button;
