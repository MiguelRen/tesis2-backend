import  { config } from 'dotenv'
console.log(config);
config ();

export default {
    host : process.env.HOST || "",
    database : process.env.DATABASE || "",
    user : process.env.USER || "",
    password : process.env.password || "",
    
}
