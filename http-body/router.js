import express from 'express';

import {createCat, updateCat, deleteCat} from './data/cats.js';

const router = express.Router();

// add POST and PATCH api routes here
router.delete('/cats/:id', (req, res) => {
    const id = parseInt(req.params.id);
    try {
        deleteCat(id);
        res.status(200).json({"message": `deleted cat ${id}`})
    } catch (error) {
        res.status(500).json({"message": `${error}`})
    }
});

export default router;