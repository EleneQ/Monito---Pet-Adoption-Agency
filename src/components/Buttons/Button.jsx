import classNames from "classnames";

function Button({
  children,
  primary,
  secondary,
  tertiary,
  outline,
  className,
  ...rest
}) {
  const classes = classNames(
    className,
    "rounded-[60px] px-5 py-2 font-medium text-primary-blue-9",
    {
      "text-white bg-primary-blue-9 hover:bg-transparent hover:text-primary-blue-9 hover:border-[1.6px] hover:border-primary-blue-9 hover:border-solid":
        primary,
      "bg-white text-primary-blue-9 hover:bg-primary-blue-9 hover:text-white":
        secondary,
      "inline-flex items-center justify-center gap-3 border-primary-blue-9 border-solid border-[1.6px] hover:text-white hover:bg-primary-blue-9 bg-transparent":
        outline,
      "bg-white text-primary-blue-9 hover:text-white hover:bg-[#F7DCBF]":
        tertiary,
      "border-white border-[1.6px] hover:bg-white hover:text-pink-400":
        outline && primary,
    }
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, tertiary }) => {
    const count = Number(!!primary) + Number(!!secondary) + Number(!!tertiary);

    if (count > 1) {
      return new Error("Only one of primary, secondary can be true");
    }
  },
};

export default Button;
