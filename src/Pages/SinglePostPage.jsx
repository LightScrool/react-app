import React from 'react';

const SinglePostPage = ({id}) => {
    return (
        <h1>{`Пост №${id ?? 0}`}</h1>
    );
};

export default SinglePostPage;