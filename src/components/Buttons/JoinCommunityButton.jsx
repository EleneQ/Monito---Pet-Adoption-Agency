import className from "classnames";

const JoinCommunityButton = ({ primary, secondary, ...rest }) => {
  const classes = className(
    rest.className,
    "rounded-[60px] px-5 py-2 font-medium",
    {
      "bg-white text-primary-blue-9": primary,
      "text-white bg-primary-blue-9": secondary,
    }
  );

  return (
    <button {...rest} className={classes}>
      Join the community
    </button>
  );
};
export default JoinCommunityButton;
