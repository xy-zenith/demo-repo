import { pool } from '../config/database.js';

const getCats = async () => {
    const results = await pool.query('SELECT * FROM cats;');
    return results.rows;
};

const getCat = async (id) => {
    const results = await pool.query('SELECT * FROM cats WHERE id = $1;', id);
    return results.rows[0];
};


const createCat = async (data) => {
    const { name, color, human, image } = data;
    const results = await pool.query('INSERT INTO cats (name, color, human, photo) VALUES ($1, $2, $3, $4) RETURNING *;', [name, color, human, image]);
    return results.rows[0];
};

const updateCat = async (id, data) => {
    const cat = await pool.query('SELECT * FROM cats WHERE id = $1;', id);
    const currentCat = cat.rows[0];
    let updatedCat = {
        ...currentCat,
        ...data
    }
    const {name, color, human, photo} = updatedCat;
    const results = await pool.query('UPDATE cats SET name = $1, color = $2, human = $3, photo = $4 WHERE id = $5 RETURNING *;', [name, color, human, photo, id]);
    return results.rows[0];
};

const deleteCat = async (id) => {
    const results = await pool.query('DELETE FROM cats WHERE id = $1 RETURNING *;', id);
    return results.rows;
};

export {getCats, getCat, createCat, updateCat, deleteCat};