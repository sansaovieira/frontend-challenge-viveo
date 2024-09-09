'use client'
import { Button, buttonVariants } from '@/components/ui/button';
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FormEvent, useContext } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { AuthContext } from '@/contexts/AuthContext';

export default function SignInForm() {
    const { register, handleSubmit } = useForm();
    const { signIn } = useContext(AuthContext)
    const router = useRouter();

    async function handleSignIn(data: any){
        await signIn(data) 
    }

    // async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    //     event.preventDefault()

    //     const formData = new FormData(event.currentTarget)
    //     const email = formData.get('email')
    //     const password = formData.get('password')

    //     const response = await fetch('/api/auth/login', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({ email, password }),
    //     })

    //     if (response.ok) {
    //         router.push('/profile')
    //     } else {
    //         // Handle errors
    //     }
    // }

    return (
        <>
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>SIGN IN</CardTitle>
                    <CardDescription>Sign in to continue</CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit(handleSignIn)}>
                    <CardContent>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="email">Email</Label>
                                <Input 
                                    {...register('email')}
                                    id="email" 
                                    name="email" 
                                    type="email" 
                                    required 
                                />
                            </div> <br />
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="password">Password</Label>
                                <Input 
                                    {...register('password')}
                                    id="password" 
                                    name="password" 
                                    type="password" 
                                    required 
                                />
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button className="w-full" type="submit">SIGN IN</Button>
                    </CardFooter>
                    <CardContent className="mt-2 grid grid-cols-3 items-center text-gray-400">
                        <hr className="border-gray-400" />
                        <p className="flex justify-center text-sm">OR</p>
                        <hr className="border-gray-400" />
                    </CardContent>
                    <CardFooter className="mt-2 grid grid-cols-3 items-center text-gray-400">
                        <Button className="w-full">
                            <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="25px">
                                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                                <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                            </svg>
                            Login with Google
                        </Button>
                    </CardFooter>
                    <CardFooter>
                        <Link
                            href="/portal/sign-up"
                            className={buttonVariants({ variant: 'link' })}
                        >
                            Don't have an account? Sign up
                        </Link>
                    </CardFooter>
                </form>
            </Card>
            {/* <div className="">
                <Image
                    src="src/assets/img.webp"
                    width={1000}
                    height={760}
                    className='rounded-2xl'
                    alt='Screenshots of the dashboard project showing desktop version'
                />
            </div> */}
        </>
    )
}