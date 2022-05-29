import React from 'react';
import '../styles/PageList.scss'
import {getRange} from '../utils.ts';
import {useDispatch, useSelector} from "react-redux";
import {setCurrentPageAction} from "../store/postsReducer";

const PagesList = ({pagesQuantity}) => {
    const dispatch = useDispatch();
    const currentPage = useSelector(state => state.postsReducer.currentPage);
    const setCurrentPage = (currentPage) => {
        dispatch(setCurrentPageAction(currentPage))
    }

    return (
        pagesQuantity < 2 // Too few elements, block is not needed
        ?
        <></>
        :
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