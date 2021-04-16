const Button = ({ onClick = null, children = null }) => (
  <button className="btn" onClick={onClick}>
    {children}
  </button>
);

export default Button;
