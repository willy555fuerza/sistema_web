/*****************conection 1*********************/

//consultas para obtener datos de base de la db
const {connectToMssql,disconnectToMssql} = require('../config/index');

class ProductosModel {
    static async getAll() { 
        try {
            const pool = await connectToMssql();
            if (!pool) {
                throw new Error('Error al conectar con MSSQL');
            }
            const request = pool.request();  
            const result = await request.query("SELECT * FROM Estudiante");
            await disconnectToMssql(pool);
            console.log(result.recordset);
            if (result.recordset.length === 0) {
                return { data: null, error: true };
            }
            return { data: result.recordset, error: false };
        }catch (error) {
            return error;
        } 
    }
    static async getByID(id){
        try {
            const pool = await connectToMssql();
            if (!pool){
                throw Error('Error al conectar con MSSQL')
            }
            const request = pool.request();
            const result = await request.query(`SELECT * FROM ejemplo WHERE id = ${id}`);
            await disconnectToMssql(pool);
            console.log(result.recordset);
            if (!result.recordset || result.recordset.length === 0) {
                return { data: null, error: true };
            }
            return { data: result.recordset[0], error: false };
        } catch (error) {
            return {data:null,error}
        }
    }
    
}


module.exports = ProductosModel