import {useEffect, useState} from 'react';
import {httpService} from "../api/httpService.ts";

function useRestAPI(method, url, queryParams, body) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        setLoading(true)
        httpService(method, url, queryParams, body)
            .then(res => setData(res.data))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    }, [method, url, queryParams, body]);

    return {data, error, loading}
}

export default useRestAPI;