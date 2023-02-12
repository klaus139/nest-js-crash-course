import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto{
    @IsNotEmpty()
    username: string;
    
    @IsEmail()
    @IsNotEmpty()
    email: string;
    password: string;

    @IsNotEmpty()
    age:number;
}