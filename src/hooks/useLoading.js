import {useState} from 'react';

const useLoading = (asyncCallBack) => {
    const [loading, setLoading] = useState(false);

    const callbackToReturn = async (...args) => {
        setLoading(true);
        await asyncCallBack(...args);
        setLoading(false);
    }

    return [callbackToReturn, loading];
}

export default useLoading;