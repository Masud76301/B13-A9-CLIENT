"use client";

import GoogleLogin from "@/component/GoogleLogin";
import { authClient } from "@/lib/auth-client";
import { Button, Description, FieldError, Form, Input, Label, Separator, TextField } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";

const LoginPage = () => {
    // const { register, handleSubmit } = useForm()

    const handleLoginFun = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries())
        const { email, password } = data;
        const { data: res, error } = await authClient.signIn.email({
            email: email,
            password: password,
            rememberMe: true,
            callbackURL: "/",
        });
        if (error) {
            toast.error(error.message);
        }
        if (res) {
            toast.success("Login Successful!");
        }
    }
    return (
        <div className=" bg-blue-50 w-[90vw] md:w-auto mx-auto border rounded-sm shadow-md py-6 px-10 my-10 ">
            <Image
                src="/sportCoveLogo.png"
                alt="SportCove"
                width={70}
                height={70}
                className="mx-auto" />
            <h1 className="text-center text-blue-700 font-bold text-3xl">SportCove</h1>
            <p className="text-center mt-1">Login to your account</p>
            <Form className="flex w-auto md:w-80 lg:w-96 flex-col gap-4 m-auto mt-10" onSubmit={handleLoginFun}>
                <TextField
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                            return "Please enter a valid email address";
                        }
                        return null;
                    }}
                >
                    <Label>Email</Label>
                    <Input placeholder="john@example.com" />
                    <FieldError />
                </TextField>
                <TextField
                    isRequired
                    minLength={8}
                    name="password"
                    type="password"
                    validate={(value) => {
                        if (value.length < 8) {
                            return "Password must be at least 8 characters";
                        }
                        if (!/[A-Z]/.test(value)) {
                            return "Password must contain at least one uppercase letter";
                        }
                        if (!/[0-9]/.test(value)) {
                            return "Password must contain at least one number";
                        }
                        return null;
                    }}
                >
                    <Label>Password</Label>
                    <Input placeholder="Enter your password" />
                    <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                    <FieldError />
                </TextField>
                <div className="flex gap-2">
                    <Button type="submit" className="rounded-sm bg-blue-700">
                        Login
                    </Button>
                    <Button type="reset" variant="secondary" className="rounded-sm">
                        Reset
                    </Button>
                </div>
            </Form>
             <div className="flex justify-center items-center mt-10 gap-3">
                <Separator className="w-[20%] md:w-30 bg-blue-700"/>
                    <div className="whitespace-nowrap">  or continue with </div>
                <Separator className="w-[20%] md:w-30 bg-blue-700"/>
            </div>
            {/* <h1 className="text-center my-3"> - or continue with - </h1> */}
            <GoogleLogin></GoogleLogin>
            <p className="text-center">Do not have an account? <Link href="/register" className="text-blue-700 font-semibold">Register here</Link></p>



        </div>
    );
};

export default LoginPage;