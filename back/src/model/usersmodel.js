/*****************conection 1*********************/

const { connectToMssql, disconnectToMssql } = require('../config/index')
const bcrypt = require('bcryptjs');

class buscarusers{
    static async getuser(username, password){
        let pool;
        let response = {
            data: undefined,
            errors: false
        }
        try {
            // Conectarse a la base de datos
            pool = await connectToMssql();
            if (!pool) {
                throw new Error('Error al conectar con MSSQL');
            }

            // Consultar la base de datos para obtener el usuario
            const request = pool.request();  
            const result = await request.query(`SELECT * FROM Usuarios WHERE username = '${username}'`);
            console.log(result.recordset);
            const user = result.recordset[0];

            // Verificar si el usuario existe y la contraseña es correcta
            if (!user || !bcrypt.compareSync(password, user.passwordHash)) {
                response = { data: null, error: 'Nombre de usuario o contraseña incorrectos' };
            } else {
                // Enviar user y contraseña como respuesta
                response = { data: user, error: false };
            }
        } catch (error) {
            // Manejar errores
            response = { data: null, error: error.message };
        }finally {
            // Desconectar de la base de datos
            if (pool) {
                await disconnectToMssql(pool);
            }

            return response
        }
    }
}

module.exports = buscarusers