import { Document } from "mongoose";

export default interface Technology extends Document{
    title:string,
    description:string,
}