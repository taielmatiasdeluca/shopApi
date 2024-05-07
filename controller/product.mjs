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

    console.log(req.params);
    const { page, amount } = req.params;
    if (!isFinite(page) || !isFinite(amount)) {
        res.status(400).json("Datos Invalidos");
        return;
    }

    const first = (page - 1) * amount;
    console.log(first)
    console.log(amount)
    const sql = `SELECT name, quantity, unitPrice, imageUrl, date_add FROM products limit ${first},${amount}`;
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
    res.status(200);
}

export async function listSuppliers(req, res) {
    res.status(200);
}

