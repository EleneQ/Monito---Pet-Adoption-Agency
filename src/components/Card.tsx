interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className, ...rest }: CardProps) => {
  return (
    <div
      {...rest}
      className={`p-2 pb-4 md:pb-5 rounded-xl shadow-card-shadow text-black ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
