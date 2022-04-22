import React from 'react';
import {MAX_POSTS_PER_PAGE} from '../data';
import {getRange} from '../utils';
import '../styles/PageList.css'

const PageList = ({totalPostCount, currentPage, setCurrentPage}) => {
    const pageCount = Math.ceil(totalPostCount / MAX_POSTS_PER_PAGE);

    // Too few elements, block is not needed
    if (pageCount < 2) return (<></>);

    return (
        <ul className="PageList">
            {/* Decrement button*/}
            <li
                className={"PageListButton"}
                onClick={() => setCurrentPage(currentPage === 1? 1 : currentPage - 1)}
            >
                <i className="fa-solid fa-arrow-left"/>
            </li>

            {/* Page buttons*/}
            {getRange(1, pageCount).map(page => {
                return (
                    <li
                        key={page}
                        className={page === currentPage ? "PageListButton _active" : "PageListButton"}
                        onClick={() => setCurrentPage(page)}
                    >
                        {page}
                    </li>
                )
            })}

            {/* Increment button*/}
            <li
                className={"PageListButton"}
                onClick={() => setCurrentPage(currentPage === pageCount? pageCount : currentPage + 1)}
            >
                <i className="fa-solid fa-arrow-right"/>
            </li>
        </ul>
    )
};

export default PageList;