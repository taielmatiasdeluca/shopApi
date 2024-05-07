import { ENV } from "../config/config.mjs";
import jwt from 'jsonwebtoken';

export function protect(req, res, next) {
    let token;
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        try {
            // get token from header
            token = req.headers.authorization.split(" ")[1];
            // verify token
            const decoded = jwt.verify(token, ENV.JWT_KEY);
            console.log(decoded);
            if (decoded.data[0]) {
                req.idUser = decoded.data[0];
            }
            console.log(req.idUser);
            next();
        } catch {
            res.status(401).json("No Autorizado");
            return;

        }

    } else {
        res.status(401).json("No Autorizado");
        return;
    }
}

export default protect;