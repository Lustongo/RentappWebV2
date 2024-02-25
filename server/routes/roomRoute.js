import express from 'express';
import { createRoom, getAllRooms, getRoom } from '../controllers/roomController.js';

const router = express.Router()

router.post("/create", createRoom)
router.get("/allRooms", getAllRooms)
router.get("/:id", getRoom)

export {router as roomRoute}