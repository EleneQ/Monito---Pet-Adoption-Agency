import classnames from "classnames";

const Card = ({ children, className }) => {
  const classes = classnames(
    className,
    "p-2 pb-4 md:pb-5 rounded-xl shadow-card-shadow text-black"
  );

  return <div className={classes}>{children}</div>;
};

export default Card;
