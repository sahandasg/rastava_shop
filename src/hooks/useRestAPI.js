import {useEffect, useState} from 'react';
import {httpService} from "../api/httpService.ts";

/**
 *
 * @param {string} method - "GET", "POST", "PUT", "DELETE", "PATCH"
 * @param {string} url request url like "/ users
 * @param {{[index:string]:string|number}} queryParams
 * @param {{[index:string]:string}} body
 * @returns {{data: object, error: object, loading: boolean}}
 */
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