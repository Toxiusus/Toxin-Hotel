import React from "react";
import "./Pagination.scss";
import arrow from "../../assets/img/arrow-right-white.svg";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const renderPageNumbers = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1, 2, 3, "...", totalPages);
    }
    return pages.map((page, index) =>
      page === "..." ? (
        <span key={index} className="pagination-ellipsis">
          ...
        </span>
      ) : (
        <button
          key={index}
          className={`pagination-btn btn-reset ${
            currentPage === page ? "active" : ""
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      )
    );
  };

  return (
    <div className="pagination-container">
      {/* <button
        className="pagination-btn arrow btn-reset"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <img src={arrow} alt="arrow" />
      </button> */}
      {renderPageNumbers()}
      <button
        className="pagination-btn arrow btn-reset"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <img src={arrow} alt="arrow" />
      </button>
    </div>
  );
};

export default Pagination;
