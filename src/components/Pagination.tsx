interface PaginationProps {
  className: string;
  itemsAmount: number;
  itemsPerPage: number;
  paginate: (pageNum: number) => void;
  currentPage: number;
}

const Pagination = ({
  className,
  itemsAmount,
  itemsPerPage,
  paginate,
  currentPage,
}: PaginationProps) => {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(itemsAmount / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const pageChangeHandler = (pageNum: number) => {
    paginate(pageNum);

    window.scrollTo({
      top: 400,
      behavior: "smooth",
    });
  };

  if (pageNumbers.length <= 1) {
    return null;
  }

  return (
    <ul
      className={`mt-[3rem] font-semibold flex justify-center items-center gap-2 ${className}`}
    >
      {pageNumbers.map((pageNum) => (
        <li
          className={`cursor-pointer px-3 py-1 rounded-lg ${
            pageNum === currentPage
              ? "bg-primary-blue-9 text-white"
              : "text-primary-blue-9 hover:bg-[#F7DCBF]"
          }`}
          key={pageNum}
          onClick={() => pageChangeHandler(pageNum)}
        >
          {pageNum}
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
