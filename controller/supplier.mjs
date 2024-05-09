import Mysql from "../config/mysql.mjs";

export async function getSupplier(req, res) {
    const { id } = req.params;
    if (!id) {
        res.status(400).json("No se envio la id del supplier");
        return;
    }
    const sql = "SELECT * FROM `suppliers` WHERE `idSupplier`=?";
    const mysql = new Mysql();
    mysql.conexion.query(sql, [id], (error, results) => {
        if (error) {
            console.log(`Error al ejecutar query ${error}`);
            res.status(500).json("Error");
            return;
        }
        res.status(200).json(results);
    });
}

export async function listProducts(req, res) {
    const { id } = req.params;
    if (!id) {
        res.status(400).json("No se envio la id del supplier");
        return;
    }
    const sql = "SELECT products.* FROM `products` INNER JOIN supplierXProduct on supplierXProduct.idProduct = products.id WHERE supplierXProduct.idSupplier=?";
    const mysql = new Mysql();
    mysql.conexion.query(sql, [id], (error, results) => {
        if (error) {
            console.log(`Error al ejecutar query ${error}`);
            res.status(500).json("Error");
            return;
        }
        res.status(200).json(results);
    });
}