
"use client";

import GoogleLogin from "@/component/GoogleLogin";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, Separator, TextField } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const RegisterPage = () => {
    const router =useRouter();

    const handleRegisterFun = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries())
        const { name, email, photo, password } = data;
        const { data: res, error } = await authClient.signUp.email({
            name: name,
            email: email,
            password: password,
            image: photo,
            
        });
        if(!error){
            router.push('/login');
        }
        if (error) {
            toast.error(error.message);
        }
        if (res) {
            toast.success('Registration Complete')
        }
    }
    return (
        <div className=" bg-blue-50 w-[90vw] md:w-auto mx-auto border shadow-md p-10 my-10">

            <h1 className="text-center text-blue-700 font-bold text-2xl">SportCove</h1>
            <h1 className="text-2xl font-bold text-center mt-1">Create account</h1>
            <p className="mb-6 text-[14px] text-center">Join thousands of players today </p>

            <Form className="flex w-auto md:w-80 lg:w-96  flex-col gap-4 m-auto" onSubmit={handleRegisterFun}>

                <TextField
                    isRequired
                    name="name"
                    type="text"
                >
                    <Label>Name</Label>
                    <Input placeholder="Enter your Name" />
                    <FieldError />
                </TextField>


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
                    name="photo"
                    type="text"
                >
                    <Label>Photo</Label>
                    <Input placeholder="Give your photo url" />
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
                    <Button type="submit" className="rounded-md bg-blue-700">
                      
                        Register
                    </Button>
                    <Button type="reset" variant="secondary" className="rounded-md">
                        Reset
                    </Button>
                </div>
            </Form>

            <div className="flex justify-center items-center mt-8 gap-3">
                <Separator className="w-[50%] md:w-50 bg-blue-700"/>
                    <div className="whitespace-nowrap"> or </div>
                <Separator className="w-[50%] md:w-50 bg-blue-700"/>
            </div>
            
            <p className="text-center">Already have an account? <Link className="text-blue-700 font-semibold" href="/login">Login</Link></p>
            
            <GoogleLogin></GoogleLogin>
        </div>
    );
};

export default RegisterPage;