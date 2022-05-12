import React, {useState} from 'react';
import '../styles/PostManager.scss';
import MyButton from "./UI/MyButton/MyButton";
import MySelect from "./UI/MySelect/MySelect";
import MyInput from "./UI/MyInput/MyInput";
import PopUp from "./UI/PopUp/PopUp";
import AddPostForm from "./AddPostForm";

const PostManager = ({setSearchQuery, setSortField}) => {
    const sortFields = {
        title: 'По названию',
        body: 'По тексту',
    }


    const [popupVisible, setPopupVisible] = useState(false);

    const OpenAddPostPopup = (event) => {
        event.preventDefault();
        setPopupVisible(true);
    }

    return (
        <div className="PostManager">
            <PopUp visible={popupVisible} setVisible={setPopupVisible}>
                <AddPostForm/>
            </PopUp>
            <MySelect
                title="Сортировать по..."
                data={sortFields}
                onChange={event => setSortField(event.target.value)}
            />
            <MyInput
                className='PostManager__search'
                placeholder='Поиск...'
                onChange={event => setSearchQuery(event.target.value)}
            />
            <MyButton onClick={OpenAddPostPopup}>+ Add post</MyButton>
        </div>
    );
};

export default PostManager;