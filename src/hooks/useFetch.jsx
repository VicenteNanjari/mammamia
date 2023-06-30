import { useState, useEffect, useCallback } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const getData = useCallback(async () => {
        setLoading(true);
        try {
            const res = await fetch(url);
            const data = await res.json();
            setData(data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error);
        } finally {
            setLoading(false);
        }
    }, [url]);

    useEffect(() => {
        getData();
    }, [getData]);
    
    return { data, loading, error };
};

export default useFetch;
