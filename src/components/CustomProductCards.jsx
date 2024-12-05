import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import {styled} from "@mui/material/styles";
import {Rating} from "@mui/lab";
import {Link} from "react-router-dom";


const CustomTypography = styled(Typography)(({theme}) => (
    {
        fontSize: "1rem",
        fontWeight: "bold",
        padding: "1rem",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        overflow: "hidden",
    }
));

const CustomDescription = styled(Typography)(({theme}) => (
    {
        overflow: "hidden",
        textOverflow: "ellipsis",
        "-webkit-line-clamp": "2",
        display: "-webkit-box",
        "-webkit-box-orient": "vertical"
    }
));

const CustomCardMedia = styled(CardMedia)(({theme}) => (
    {
        marginX: "auto",
        width: "300px",
        height: "300px",
        objectFit: "contain",
    }
));
export default function CustomProductCards({loading, data}) {

    const defaultCard = [...Array(8)]
    return (
        <>
            <h1 className={"text-content text-3xl font-semibold p-4 ml-20"}>Shop</h1>
            <div className={"flex flex-wrap justify-evenly sm:px-16"}>
                {
                    loading ?
                        defaultCard.map((card) => (
                            <Card sx={{width: 300, m: 2, p: 2}}>
                                <Skeleton/>
                                <Skeleton sx={{height: 300}}/>
                                <Skeleton/>
                                <Skeleton/>
                                <Skeleton/>
                            </Card>
                        ))
                        :
                        data.map((item) => (
                            <Card sx={{maxWidth: 300, m: 2}} key={item.id}>
                                <CustomTypography className={"text-xl"} gutterBottom variant="h3" component="div">
                                    {item.title}
                                </CustomTypography>
                                <CustomCardMedia
                                    component="img"
                                    sx={{maxHeight: "300px", maxWidth: "300px"}}
                                    image={item.image}
                                />
                                <CardContent>
                                    <CustomDescription variant="body2" component="p">
                                        {item.description}
                                    </CustomDescription>
                                </CardContent>
                                <CardContent>
                                    <div className={"flex flex-wrap justify-between mb-4"}>
                                        <p>{item.price} $</p>
                                        <p className={"bg-third px-1.5 pb-0.5 rounded text-content"}>{item.category}</p>
                                    </div>
                                    <div className={"flex items-center justify-between"}>
                                        <Rating name="read-only" value={item.rating.rate} size="small" readOnly/>
                                        <Link className={"flex justify-center w-[50%] bg-secondary text-content rounded p-2"}
                                              to={`/products/${item.id}`}>
                                            <button>Shop Now
                                            </button>
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
            </div>
        </>
    );
}