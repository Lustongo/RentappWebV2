import express from 'express';
import { allFavorites, bookVisit, cancelBooking, createUser, getAllBookings, toFavorite } from '../controllers/userController.js';
const router = express.Router()

router.post("/register", createUser)
router.post("/bookVisit/:id", bookVisit);
router.post("/allBookings", getAllBookings);
router.post("/cancelBooking/:id", cancelBooking);
router.post("/toFavorite/:rm", toFavorite)
router.post("/allFavorites/", allFavorites)


export {router as userRoute}