import React, {useEffect, useState} from 'react';
import {httpService} from "../api/httpService.ts";
import {Rating} from "@mui/lab";
import Skeleton from '@mui/material/Skeleton';
import {styled} from "@mui/material/styles";
import Alert from "@mui/material/Alert";


const CustomSkeleton = styled(Skeleton)(({theme}) => (
    {
        backgroundColor: "#434343",
        width: "100%"
    }
));

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

function CustomProductCard(props) {
    const productId = window.location.href.split('/').slice(-1)

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        httpService("GET", `/products/${productId}`, {}, {})
            .then(res => setData(res.data))
            .catch(err => setError(err.response.data))
            .finally(() => setLoading(false))
    }, []);

    console.log(error)

    return (
        <>
            {
                error ? <CustomAlert severity="error">{error}</CustomAlert> :
                    <div className={"flex flex-col bg-main p-8 md:m-12 m-4 rounded"}>
                        <h1 className={"text-content text-xl sm:text-3xl font-semibold mb-8"}>
                            {
                                loading ? <CustomSkeleton/> : data.title
                            }
                        </h1>
                        {
                            loading ?
                                <div>
                                    <CustomSkeleton height={300}/>
                                    <CustomSkeleton height={70}/>
                                </div>
                                :
                                <div
                                    className={"flex gap-4 flex-wrap justify-between items-center md:items-stretch flex-col-reverse md:flex-nowrap md:flex-row"}>
                                    <div className={"flex flex-col flex-wrap gap-4 justify-between"}>
                                        <p className={"text-content"}>
                                            {data.description}
                                        </p>
                                        <div className={"flex justify-between gap-4 flex-wrap md:flex-col"}>
                                            <div
                                                className={"flex items-center gap-4 bg-content lg:w-fit p-2 w-full justify-between rounded"}>
                                                <p className={"bg-third p-1.5 rounded w-fit text-content"}>
                                                    {data.category}
                                                </p>
                                                <Rating name="read-only" value={data.rating.rate} readOnly/>
                                            </div>
                                            <button
                                                className={"flex bg-third items-center justify-center w-full gap-4 rounded p-2"}>
                                                <p className={"text-content"}>Add To Cart</p>
                                                <p>
                                                    {data.price} $
                                                </p>
                                            </button>
                                        </div>
                                    </div>
                                    <img width={300} height={300} className={"rounded"} src={data.image}
                                         alt="product-img"/>
                                </div>

                        }
                    </div>
            }
        </>

    );
}

export default CustomProductCard;