import {useState} from 'react';

const useLoading = (
    asyncCallBack: (...args: any) => Promise<any>
): [(...args: any) => Promise<any>, boolean, string] => {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const callbackToReturn = async (...args: any): Promise<any> => {
        try {
            setIsLoading(true);
            await asyncCallBack(...args);
        } catch (error: any) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    return [callbackToReturn, isLoading, error]
};

export default useLoading;