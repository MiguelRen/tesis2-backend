import { getConnection } from './../database/database';
console.log("3");


const getUsuarios = async( req , res ) =>{
    console.log("4");
    const connection = await getConnection();
    
    const result = await connection.query("SELECT * FROM usuarios" );
    console.log(result);
    res.json(result);
    
;}

export const methods = {

    getUsuarios
} ;