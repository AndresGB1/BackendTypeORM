import "reflect-metadata"
import dotenv from "dotenv"
dotenv.config()
import app from "./app"
import { AppDataSource } from "./db"


async function main(){
    await AppDataSource.initialize()
    app.listen(3000, () => { 
    console.log('Server is running on port 3000');
    });
}

main();