/*****************conection 2*********************/

const ProductosModel = require('../model/index') // Importa el modelo ProductosModel

class Productos{
    static async getAll(req,res){
        try {
            const { data, error } = await ProductosModel.getAll();
            if (error) {
                throw new Error('No hay productos');
            }
            res.status(200).json(data);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    static async getByID(req, res){
        try {
            const { id } = req.params;
            if (!id || !Number(id)) {
                return res.status(400).json({ error: 'No se proporcionó un ID válido' });
            }

            // Llamar a la función estática de ProductosModel
            const { data, error } = await ProductosModel.getByID(id);
            if (error) {
                return res.status(404).json({ error: 'No existe el producto' });
            }
            return res.status(200).json(data);
        } catch (error) {
            console.error('Error al obtener el producto:', error);
            return res.status(500).json({ error: 'Error interno del servidor' });
        }
    }
}

module.exports = Productos