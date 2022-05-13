import React from 'react';
import {getRange} from '../utils';
import '../styles/PageList.scss'

const PagesList = ({currentPage, setCurrentPage, pagesQuantity}) => {
    // Too few elements, block is not needed
    if (pagesQuantity < 2) return (<></>);

    return (
        <ul className="PageList">
            {/* Decrement button*/}
            <li
                className={"PageList__Button"}
                onClick={() => setCurrentPage(currentPage === 1? 1 : currentPage - 1)}
            >
                <i className="fa-solid fa-arrow-left"/>
            </li>

            {/* Page buttons*/}
            {getRange(1, pagesQuantity).map(page => {
                return (
                    <li
                        key={page}
                        className={page === currentPage ? "PageList__Button _active" : "PageList__Button"}
                        onClick={() => setCurrentPage(page)}
                    >
                        {page}
                    </li>
                )
            })}

            {/* Increment button*/}
            <li
                className={"PageList__Button"}
                onClick={() => setCurrentPage(currentPage === pagesQuantity? pagesQuantity : currentPage + 1)}
            >
                <i className="fa-solid fa-arrow-right"/>
            </li>
        </ul>
    )
};

export default PagesList;