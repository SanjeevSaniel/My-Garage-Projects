import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import Pagination from "react-bootstrap/Pagination";

const PaginationComponent = (props) => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;
  // console.log("PC", currentPage);
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  // let pages = [];
  // for (let page = 1; page <= pagesCount; page++) {
  //   pages.push(
  //     <Pagination.Item
  //       key={page}
  //       active={page === currentPage}
  //       onClick={() => onPageChange(page)}
  //     >
  //       {page}
  //     </Pagination.Item>
  //   );
  // }

  return (
    <div>
      <Pagination>
        {pages.map((page) => {
          return (
            <Pagination.Item
              key={page}
              active={page === currentPage}
              onClick={() => onPageChange(page)}
            >
              {page}
            </Pagination.Item>
          );
        })}
      </Pagination>
    </div>
  );
};

PaginationComponent.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default PaginationComponent;
