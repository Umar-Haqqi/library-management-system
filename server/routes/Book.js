import express from "express";
import { getBooks, getBook, registerBook, checkin, checkout } from "../controllers/Books.js";

const router = express.Router();

router.get('/', getBooks)
    .get('/:id', getBook)
    .post('/', registerBook)
    .post('/checkin/:id', checkin)
    .post('/checkout/:id', checkout)

export default router;