import { Document } from "mongoose";

export default interface User extends Document{
    title:string;
    description:string;
    image:string
}