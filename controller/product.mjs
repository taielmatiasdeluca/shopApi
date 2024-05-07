import Mysql from "../config/mysql.mjs";


export async function newProduct(req, res) {
    const { name, quantity, imageUrl, unitPrice } = req.body
    if (!name ||
        !quantity ||
        !imageUrl ||
        !unitPrice
    ) {
        res.status(400).json("Datos insuficientes");
        return;
    }
    const sql = "INSERT INTO `products` (`name`, `quantity`, `imageUrl`,`unitPrice`) VALUES (?,?,?,?)";
    const mysql = new Mysql();
    mysql.conexion.query(sql, [name, quantity, imageUrl, unitPrice], (error) => {
        if (error) {
            console.log(`Error al ejecutar query ${error}`);
            res.status(500).json("Error al crear el producto");
            return;
        }

        res.status(200).json("Producto registrado!");
    });
}

export async function listAllProducts(req, res) {
    const { page, amount } = req.params;
    if (!isFinite(page) || !isFinite(amount)) {
        res.status(400).json("Datos Invalidos");
        return;
    }
    const first = (page - 1) * amount;
    const sql = `SELECT id,name, quantity, unitPrice, imageUrl, date_add FROM products limit ${first},${amount}`;
    const mysql = new Mysql();
    mysql.conexion.query(sql, (error, results) => {
        if (error) {
            console.log(`Error al ejecutar query ${error}`);
            res.status(500).json("Error");
            return;
        }
        res.status(200).json(results);
    });
}

export async function deleteProduct(req, res) {
    const { id } = req.params;
    if (!isFinite(id)) {
        res.status(400).json("Error en la id enviada");
    }
    const sql = "DELETE FROM `products` WHERE `id`=?";
    const mysql = new Mysql();
    mysql.conexion.query(sql, [id], (error) => {
        if (error) {
            console.log(`Error al ejecutar query ${error}`);
            res.status(500).json("Error al eliminar el producto");
            return;
        }
        res.status(200).json("Eliminado con exito");
    });
}

export async function getProduct(req, res) {
    const { id } = req.params;
    if (!id) {
        res.status(400).json("Error en la id enviada");
        return;
    }
    if (!isFinite(id)) {
        res.status(400).json("Error en la id enviada");
        return;
    }
    const sql = "SELECT `name`, `quantity`, `unitPrice`, `imageUrl`, `date_add` FROM `products` WHERE `id`=?";
    const mysql = new Mysql();
    mysql.conexion.query(sql, [id], (error, results) => {
        if (error) {
            console.log(`Error al ejecutar query ${error}`);
            res.status(500).json("Error al obtener");
            return;
        }
        res.status(200).json(results);
    });
}

export async function listSuppliers(req, res) {
    const { id } = req.params;
    if (!id) {
        res.status(400).json("Error en la id enviada");
        return;
    }
    if (!isFinite(id)) {
        res.status(400).json("Error en la id enviada");

        throw new Error("Id incorrecta");
    }
    const sql = 'SELECT suppliers.idSupplier,suppliers.name FROM `products`INNER JOIN supplierXProduct on supplierXProduct.idProduct = products.id INNER JOIN suppliers on supplierXProduct.idSupplier = suppliers.idSupplier WHERE products.id =?';
    const mysql = new Mysql();
    mysql.conexion.query(sql, [id], (error, results) => {
        if (error) {
            console.log(`Error al ejecutar query ${error}`);
            res.status(500).json("Error al obtener");
            return;
        }
        res.status(200).json(results);
        return;
    });
}

