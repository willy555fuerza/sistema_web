const usercontroller = require('./Usercontroller');

class Token{
    static async token(req, res) {
        const { username, password } = req.body;
        try {
            console.log("Solicitud de inicio de sesión recibida:", username); // Agrega un registro de consola para la solicitud recibida
            const token = await usercontroller.login(username, password);
            if (typeof token == "string") {
                res.json({ token });       
            } else {
                res.status(403).json(token);    
            }
        } catch (error) {
            console.error("Error al procesar la solicitud de inicio de sesión:", error); // Agrega un registro de consola para cualquier error
            res.status(401).json({ error: error.message });
        }
    }

}

module.exports = Token