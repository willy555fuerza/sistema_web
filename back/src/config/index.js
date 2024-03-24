/********************conection db**********************/

const mssql = require('mssql');

// Configuración de la conexión a SQL Server
const config = {
    user: 'sa',    
    password: '123456789',
    server: 'localhost', // Puedes cambiar esto por la dirección de tu servidor SQL Server
    database: 'node_proyect',
    options: {
        encrypt: true, // Si estás usando una conexión encriptada, por ejemplo, con Azure
        trustServerCertificate: true
    }
}
    
// Función para conectar a SQL Server
async function connectToMssql() {
    try {
        // Conectar a la base de datos     
        const pool = await mssql.connect(config);
        console.log('Conectado a SQL Server');
        /*const result = await pool.query('SELECT * FROM Usuarios')
        console.log(result)*/
        return pool
    } 
    catch (error) {
    console.error('Error al conectar a SQL Server:', error);
    }
}
// Función para desconectar de SQL Server
async function disconnectToMssql() {
    try {
        // Cerrar la conexión
        await mssql.close();
        console.log('Desconectado de SQL Server');
    } 
    catch (error) {
        console.error('Error al desconectar de SQL Server:', error);
    }
}

module.exports = {connectToMssql,disconnectToMssql}