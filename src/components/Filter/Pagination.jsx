import { useState, useEffect } from "react";

const Pagination = ({
  postsPerPage,
  totalPosts,
  dogList,
  paginate,
  currentPage,
}) => {
  const [pageNumbers, setPageNumbers] = useState([]);

  //get page numbers
  useEffect(() => {
    const totalPages = Math.ceil(totalPosts / postsPerPage);
    const numbers = Array.from({ length: totalPages }, (_, index) => index + 1);
    setPageNumbers(numbers);
  }, [dogList.length]);

  // useEffect(() => {
  //   window.scrollTo(0, 400);
  // }, [paginate]);

  return (
    <nav>
      <ul className="flex justify-center items-center gap-5">
        {pageNumbers.map((pageNum) => (
          <li
            className={`cursor-pointer ${
              pageNum === currentPage
                ? "bg-primary-blue-9 text-white px-3 py-1 rounded-lg"
                : "text-primary-blue-9"
            }`}
            key={pageNum}
            onClick={() => paginate(pageNum)}
          >
            {pageNum}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
