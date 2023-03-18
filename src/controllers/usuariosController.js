import { getConnection } from './../database/database';



const getUsuarios = async( req , res ) =>{
   
    const connection = await getConnection();
    
    const result = await connection.query("SELECT * FROM usuarios" );
    console.log(result);
    res.json(result);
    
;}

export const methods = {

    getUsuarios
} ;