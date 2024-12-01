import * as React from 'react';
import {Formik, Field, Form, FormikHelpers} from 'formik';

interface Values {
    username: string;
    password: string;
}

function Login() {
    return (
        <div className={"flex flex-col items-center w-[90%] sm:w-[70%] xl:w-[40%] mx-auto mt-32 bg-secondary text-content p-4 rounded"}>
            <h1 className={"text-2xl my-2"}>Log in</h1>
            <Formik
                initialValues={{
                    username: '',
                    password: '',
                }}
                onSubmit={(
                    values: Values,
                    {setSubmitting}: FormikHelpers<Values>
                ) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 500);
                }}
            >
                <Form className={"flex flex-col gap-2 w-[100%] p-8"}>
                    <label htmlFor="userName">User Name</label>
                    <Field className={"rounded p-2 focus:outline-third"} id="userName" name="userName" placeholder="mor_2314"/>

                    <label htmlFor="password">Password</label>
                    <Field className={"rounded p-2 focus:outline-third"} id="password" name="password" placeholder="83r5^_"/>

                    <button className={"bg-third mt-6 w-full p-2 rounded"} type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    );
};
export default Login;