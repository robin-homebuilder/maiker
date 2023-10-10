"use client"

import Link from "next/link"
import { useRouter } from "next/navigation";

import { getSession, signIn } from 'next-auth/react';

import { useForm } from 'react-hook-form'

import { useState } from "react";

import { FaSpinner } from "react-icons/fa";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z  from 'zod'

import { ROLES_LIST } from "@/libs/rolesList";

interface LoginFormInputs {
  email: string;
  password: string;
}

const schema = z.object({
  email: z.string().email(),
  password: z.string()
});

export default function Login() {
  const router = useRouter();

  const [ submitting, setSubmitting ] = useState<boolean>(false);
  
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>({
    resolver: zodResolver(schema)
  });

  const onSubmit = async (data: LoginFormInputs) => {
    setSubmitting(true);

    const result = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    
    const session = await getSession();

    if(result?.error){
      setSubmitting(false)
    } else{
      if (session && session.user) {
        const { role } = session.user;

        if (role === ROLES_LIST.Admin) {
          router.push("/administration/client-search");
        } else if(role === ROLES_LIST.Client) {
          router.push("/client-administration/consultant-access");
        } else if(role === ROLES_LIST.Consultant) {
          router.push("/consultant-dashboard/client-search");
        }
      }
    }
  }
  
  return (
    <>
      <section className='bg-accent py-[80px]'>
        <div className='max-w-[1250px] mx-auto'>
          <h1 className='text-primary font-[800] text-center mb-7'>Sign In</h1>
          <div className='flex flex-wrap justify-center'>
            <form className="w-[390px]" onSubmit={handleSubmit(onSubmit)}>
              <input type="email" {...register("email")} className="border border-primary rounded-[25px] h-[50px] w-full mb-4" placeholder="Email" required/>
              <input type="password" {...register("password")} className="border border-primary rounded-[25px] h-[50px] w-full mb-4" placeholder="Password" required/>
              <div className="flex justify-center mb-4">
                <Link href="/auth/forgot" className="text-primary underline">I forgot my password</Link>
              </div>
              <div className="flex justify-center mb-4">
                <div className="flex justify-center items-center gap-x-2.5">
                  <input type="checkbox" className="custom-checkbox" required/>
                  <span className="text-primary">I'm not a robot</span>
                </div>
              </div>
              <hr className="mb-4 border-primary"/>
              <div className="flex justify-center">
                <button type="submit" className={`bg-tertiary rounded-[20px] shadow-mainShadow w-[200px] h-[42px] font-[500] flex justify-center items-center`}>{submitting ? (<>Logging In&nbsp;&nbsp;<FaSpinner className="animate-spin"/></>) : "Log In"}</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
