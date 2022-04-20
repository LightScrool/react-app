import {useState} from 'react';

const UseFetchong = async (callback) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    let responce;

    try {
        responce = setIsLoading(true);
        await callback;
    } catch (exception){
        setError(exception);
    } finally {
        setIsLoading(false);
    }

    return [responce, isLoading, error]
};

export default UseFetchong;