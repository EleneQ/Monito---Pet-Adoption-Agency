const ViewButton = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className="rounded-[60px] px-5 py-2 font-medium border-primary-blue-9 border-solid border-[1px] mr-6 text-primary-blue-9 inline-flex items-center gap-3"
    >
      {children}
    </button>
  );
};

export default ViewButton;
