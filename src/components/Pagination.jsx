const Pagination = ({ itemsAmount, itemsPerPage, paginate, currentPage }) => {
  const pageNumbers = [];

  //get page numbers
  for (let i = 1; i <= Math.ceil(itemsAmount / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const pageChangeHandler = (pageNum) => {
    paginate(pageNum);

    window.scrollTo({
      top: 400,
      behavior: "smooth",
    });
  };

  return (
    <nav className="mt-[3rem] font-semibold">
      <ul className="flex justify-center items-center gap-2">
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
    </nav>
  );
};

export default Pagination;
