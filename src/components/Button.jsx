import classNames from "classnames";

function Button({ children, className, variant = "primary", ...rest }) {
  const variantClasses = {
    primary:
      "text-white bg-primary-blue-9 hover:bg-transparent hover:text-primary-blue-9 border-[2px] border-primary-blue-9 border-solid",
    outline:
      "border-primary-blue-9 border-solid border-[1.6px] hover:text-white hover:bg-primary-blue-9 bg-transparent",
  };

  const classes = classNames(
    "rounded-[60px] px-5 py-2 font-medium text-primary-blue-9 transition-all duration-200 ease-in-out inline-flex gap-3 items-center",
    variantClasses[variant],
    className
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

export default Button;
