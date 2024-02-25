import asyncHandler from 'express-async-handler';

import {prisma} from "../config/prismaConfig.js"
//Funcion crea una habitacion nueva
export const createRoom = asyncHandler(async (req, res) => {
    const {title, description, price, address, city, country, image, 
    facilities, userEmail} = req.body.data;

    console.log(req.body.data)

    try{
        const room = await prisma.room.create({
            data: {
                title, 
                description, 
                price, 
                address,
                city, 
                country, 
                image, 
                facilities, 
                owner: {connect: {email: userEmail}},
            },
        })
        res.send({message:"Habitacion creada exitosamente!", room})
    }catch(err) {
        if(err.code === "P2002")
        {
            throw new Error("Ya existe una habitacion con esa direccion")
        }
        throw new Error(err.message)
    }
})
//Funcion toma todas las habitaciones en la BD
export const getAllRooms = asyncHandler(async(req, res) => {
    const rooms = await prisma.room.findMany({
        orderBy: {
            createdAt: "desc"
        }
    })
    res.send(rooms);
})

//Funcion toma una habitacion en especifico
export const getRoom = asyncHandler(async(req, res) => {
    const {id} = req.params;

    try{
        const room = await prisma.room.findUnique({
            where: {id: id}
        })
        res.send(room)
    }catch(err){
        throw new Error(err.message);
    }
})