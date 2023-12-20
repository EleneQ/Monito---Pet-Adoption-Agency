import { useState, useEffect, useContext } from "react";
import { DogDataContext } from "../../context/DogDataContext";

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const [pageNumbers, setPageNumbers] = useState([]);
  const { dogList } = useContext(DogDataContext);

  //get page numbers
  useEffect(() => {
    const totalPages = Math.ceil(totalPosts / postsPerPage);
    const numbers = Array.from({ length: totalPages }, (_, index) => index + 1);
    setPageNumbers(numbers);
  }, [dogList.length]);

  useEffect(() => {
    window.scrollTo(0, 400);
  }, [paginate]);

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
