function Button({ children, isActive, ...props }) {
  const { className } = props;

  return (
    <button type="button" {...props} className={`btn ${className}`}>
      {children}
    </button>
  );
}

export default Button;
