import React, {useEffect, useState} from 'react';
import Header from "../components/Header";
import CustomProductCards from "../components/CustomProductCards";
import {httpService} from "../api/httpService.ts";
import {styled} from "@mui/material/styles";
import Alert from "@mui/material/Alert";


const CustomAlert = styled(Alert)(({theme}) => (
    {
        position: "absolute",
        top: "132px",
        left: "0",
        right: "0",
        margin: "0 auto",
        width: "70%",
    }
));

function Shop(props) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        httpService("GET", "products", {}, {})
            .then(res => setData(res.data))
            .catch(err => setError(err.response.data))
            .finally(() => setLoading(false))
    }, []);

    return (
        <>
            <Header/>
            {
                error ? <CustomAlert severity="error">{error}</CustomAlert> :
                    <CustomProductCards loading={loading} data={data}/>
            }
        </>
    );
}

export default Shop;