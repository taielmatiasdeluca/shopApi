import Mysql from "../config/msql.mjs";
import md5 from "md5";
import { randomBytes } from "crypto";
import jwt from 'jsonwebtoken'
import { ENV } from "../config/config.mjs";

export async function register(req, res) {
    const body = req.body;
    if (!body.email || !body.password) {
        res.status(400).json("Informacion invalida");
    }
    const mysql = new Mysql();
    const sql = "INSERT INTO `users` ( `email`, `password`, `idToken`, `token_action`) VALUES (?,?,?,?)";
    const idToken = md5(randomBytes(20).toString('hex') + body.email);
    const actionToken = md5(randomBytes(20).toString('hex') + body.email);

    mysql.conexion.query(sql, [body.email, md5(body.password), idToken, actionToken], (error, results, fieds) => {
        if (error) {
            console.log(`Error al ejecutar query ${error}`);
            res.status(500).json("Error al ingresar el usuario");
        }
        res.status(200).json("Usuario registrado ahora debe activarlo");
    })

}

export async function login(req, res) {
    const body = req.body;
    if (!body.email || !body.password) {
        res.status(400).json("Informacion invalida");
        return;

    }
    const mysql = new Mysql();
    const sql = "SELECT `idToken`,token_action,active,blocked FROM `users` WHERE `email`=? and `password`=?";
    mysql.conexion.query(sql, [body.email, md5(body.password)], (error, results) => {
        if (error) {
            res.status(500).json("Error al ingresar el usuario");
            return next();
        }
        if (results.length !== 1) {
            res.status(401).json("Credenciales incorrectas");
            return;
        }
        const token = jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24),
            data: [results?.idToken]
        }, ENV.JWT_KEY);
        res.status(200).json(token);
    });
}