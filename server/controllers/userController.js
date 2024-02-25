import asyncHandler from 'express-async-handler'

import {prisma} from "../config/prismaConfig.js"

export const createUser = asyncHandler(async(req, res) => {
    console.log("Creando usuario");

    let {email} = req.body;
    const userExist = await prisma.user.findUnique({where: {email: email}})
    if(!userExist) {
        const user = await prisma.user.create({data: req.body})
        res.send({
            message: "Usuario creado con exito",
            user: user,
        })
    }
    else res.status(201).send({message: "El usuario ya esta registrado"});
})
//Funcion agendar visita a cuarto
export const bookVisit = asyncHandler(async (req, res) => {
    const { email, date } = req.body;
    const { id } = req.params;
  
    try {
      const alreadyBooked = await prisma.user.findUnique({
        where: { email },
        select: { VisitDate: true },
      });
  
      if (alreadyBooked.VisitDate.some((visit) => visit.id === id)) {
        res
          .status(400)
          .json({ message: "Ya haz agendado una cita para esta habitacion" });
      } else {
        await prisma.user.update({
          where: { email: email },
          data: {
            VisitDate: { push: { id, date } },
          },
        });
        res.send("Cita agendada con exito!");
      }
    } catch (err) {
      throw new Error(err.message);
    }
  })

  //Funcion ver todas las citas de un usuario
  export const getAllBookings = asyncHandler(async (req, res) => {
    const { email } = req.body;
    try {
      const bookings = await prisma.user.findUnique({
        where: { email },
        select: { VisitDate: true },
      })
      res.status(200).send(bookings);
    } catch (err) {
      throw new Error(err.message);
    }
  })

  //Funcion cancelar citas
  export const cancelBooking = asyncHandler(async (req, res) => {
    const { email } = req.body;
    const { id } = req.params;
    try {
      const user = await prisma.user.findUnique({
        where: { email: email },
        select: { VisitDate: true },
      });
  
      const index = user.VisitDate.findIndex((visit) => visit.id === id);
  
      if (index === -1) {
        res.status(404).json({ message: "Cita no encontrada" });
      } else {
        user.VisitDate.splice(index, 1);
        await prisma.user.update({
          where: { email },
          data: {
            VisitDate: user.VisitDate,
          },
        });
  
        res.send("Cita cancelada exitosamente");
      }
    } catch (err) {
      throw new Error(err.message);
    }
  })

  //Funcion agrega habitacion a favoritos
  export const toFavorite = asyncHandler(async (req, res) => {
    const {email} = req.body
    const {rm} = req.params

    try{
        const user = await prisma.user.findUnique({
            where: {email: email}
        })
        if(user.favRoomID.includes(rm)) {
            const updateUser = await prisma.user.update({
                where: {email},
                data: {
                    favRoomID: {
                        set: user.favRoomID.filter((id) => id !== rm)
                    }
                }
            })
            res.send({message: "Habitacion removida de favoritos", user: updateUser})
        } else {
            const updateUser = await prisma.user.update({
                where: {email},
                data: {
                    favRoomID: {
                        push: rm
                    }
                }
            })
            res.send({message: "Favoritos actualizados", user: updateUser })
        }
    }catch (err) {
      throw new Error(err.message);
    }
  })

  //Funcion ver todos los favoritos
  export const allFavorites = asyncHandler(async (req, res) => {
    const { email } = req.body;
  try {
    const favRooms = await prisma.user.findUnique({
      where: { email },
      select: { favRoomID: true },
    });
    res.status(200).send(favRooms);
  } catch (err) {
    throw new Error(err.message);
  }
  })