import { query } from "mssql";
import { getConnection, sql, queries } from "../database";

export const getUsers = async(req, res) => {

    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllAttentions)
        res.json(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error.message);
        
    }
};

export const getAttentionByIdCuenta = async(req, res) => {
    const{id} = req.params

    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .input('IdCuenta', id)
        .query(queries.getAttentionByIdCuenta);
        res.send(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}