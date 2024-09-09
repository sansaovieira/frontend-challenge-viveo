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

export default function SignUpForm() {
    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>SIGN UP</CardTitle>
                <CardDescription>
                    Fill in the fields below to create an account.
                </CardDescription>
            </CardHeader>
            <form>
                <CardContent>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" name="name" required />
                        </div> <br />
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" name="email" type="email" required />
                        </div> <br />
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" name="password" type="password" required />
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button className='w-full' type="submit">Create Account</Button>
                </CardFooter>
                <CardFooter>
                    <Link
                        href="/portal/sign-in"
                        className={buttonVariants({ variant: 'link' })}
                    >
                        I have an account
                    </Link>
                </CardFooter>
            </form>
        </Card>
    );
}