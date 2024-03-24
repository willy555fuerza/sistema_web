/*****************conection 2*********************/

//const bcrypt = require('bcryptjs') // Importa la biblioteca bcrypt para cifrar contraseñas
const jwt = require('jsonwebtoken') // Importa la biblioteca jsonwebtoken para generar tokens de autenticación
const buscarusers = require('../model/usersmodel') // Importa el modelo ProductosModel para obtener usuarios

class usercontroller{
    // Método para autenticar usuarios
    static async login(username, password) {
        try {

            // Llamar a la función estática de ProductosModel y obtener la lista de usuarios
            const users = await buscarusers.getuser(username, password);

            //Verifica si el usuario es correcto
            const user = users.data;
            if (!user) {
                throw new Error(users.error || 'Usuario no encontrado');
            }

            // Verifica si la contraseña es correcta
            //Se utiliza bcrypt.compare para verificar si la contraseña proporcionada coincide con la contraseña almacenada cifrada en la base de datos
            // const isValidPassword = await bcrypt.compare(password, user.password);
            // if (!isValidPassword) {
            //     throw new Error('Contraseña incorrecta');
            // }

            // Si la verificacion es correcta, se crea un token de autorizacion, que expira en 1 hora
            const token = jwt.sign({ id: user.id, username: user.username }, 'secretkey', { expiresIn: '1m' });

            // Retorna el token
            return token;
        } catch (error) {
            // Devolver mensaje de error
            return { error: error.message }; 
        }  
    }
}
module.exports = usercontroller