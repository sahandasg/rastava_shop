import * as React from 'react';
import {Formik, Field, Form} from 'formik';
import LoadingButton from '@mui/lab/LoadingButton';
import {styled} from '@mui/material/styles';
import Alert from '@mui/material/Alert';

import useAuth from "../hooks/useAuth";


const CustomButton = styled(LoadingButton)(({theme}) => (
    {
        backgroundColor: "#A64D79",
        padding: "8px",
        marginTop: "24px",
        color: "#ffff",
        border: "none"
    }
));

const CustomAlert = styled(Alert)(({theme}) => (
    {
        position: "absolute",
        top:"32px",
        left: "0",
        right: "0",
        margin: "0 auto",
        width: "70%",
    }
));

function Login() {
    const {login, loading, error} = useAuth();

    const handelLogin = (event) => {
        login(event)
    }

    return (
        <>
            {
                error && <CustomAlert severity="error">{error}</CustomAlert>
            }
            <div
                className={"flex flex-col items-center w-[90%] sm:w-[70%] xl:w-[40%] mx-auto mt-32 bg-secondary text-content p-4 rounded"}>
                <h1 className={"text-2xl my-2"}>Log in</h1>
                <Formik
                    initialValues={{
                        userName: '',
                        password: '',
                    }}
                    onSubmit={(event) => handelLogin(event)}
                >
                    <Form className={"flex flex-col gap-2 w-[100%] p-8"}>
                        <label htmlFor="userName">User Name</label>
                        <Field className={"rounded p-2 focus:outline-third text-main"} id="userName" name="userName"
                               placeholder="mor_2314"/>

                        <label htmlFor="password">Password</label>
                        <Field className={"rounded p-2 focus:outline-third text-main"} id="password" name="password"
                               placeholder="83r5^_"/>

                        <CustomButton type={"submit"} loading={loading} variant="outlined">
                            Submit
                        </CustomButton>
                    </Form>
                </Formik>
            </div>
        </>

    );
};
export default Login;