import React, { useState } from "react"
import styles from './Pagination.module.css'

const Pagination = ({ totalItems, itemsPerPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const renderPageButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`PaginationBtn ${currentPage === i ? styles.Active : ""}`}
        >
          {i}
        </button>
      );
    }
    return buttons;
  };

  return (
    <div className={styles.PaginationContainer}>
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={styles.PrevBtn}
      >
        Prev
      </button>
      {/* {renderPageButtons()} */}
        <p id={styles.PageNumber}>{currentPage}</p>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={styles.NextBtn}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;