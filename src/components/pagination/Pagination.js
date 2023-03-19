import PropTypes from "prop-types";
import ReactPaginate from "react-paginate";
import GoUpButton from "./GoUpBtn";
import './pagination.scss';
import {BsArrowLeftCircleFill} from 'react-icons/bs';
import {BsArrowRightCircleFill} from 'react-icons/bs';

const Pagination = ({ pageNumber, info, updatePageNumber }) => {
    const handlePageClick = (data) => {
        const selectedPage = data.selected + 1;
      updatePageNumber(selectedPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  
  return (
    <>
      <ReactPaginate
        className="pagination"
        previousLabel=<BsArrowLeftCircleFill/>
        nextLabel=<BsArrowRightCircleFill/>
        breakLabel={"..."}
        pageCount={info?.pages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        forcePage={pageNumber - 1}
        previousClassName="pagination__btn pagination-prev"
        nextClassName="pagination__btn pagination-next"
        activeClassName="pagination__active"
        pageClassName="pagination__item"
        pageLinkClassName="pagination__link"
          />
        <GoUpButton />
    </>
  );
};

Pagination.propTypes = {
  pageNumber: PropTypes.number,
  updatePageNumber: PropTypes.func.isRequired,
  pageRange: PropTypes.number,
  marginPages: PropTypes.number
}

export default Pagination;
