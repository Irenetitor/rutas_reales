// import { db } from "../config/db.config.js"

const user = [
  {
    id: "usr_1001",
    nombre: "Carlos",
    apellido: "Mendoza",
    correo: "carlos.mendoza@ejemplo.com",
    clave: "$2b$10$xyzMockHashClaveSegura123",
    direccion: {
      calle: "Av. Libertador 1234, Apto 5",
      ciudad: "Madrid",
      codigoPostal: "28001",
      pais: "España",
    },
    telefono: "+34612345678",
    fechaNacimiento: "1990-05-14",
    rol: "usuario",
    preferencias: {
      notificacionesEmail: true,
      tema: "oscuro",
    },
    activo: true,
    fechaRegistro: "2026-02-15T08:30:00Z",
  },
  {
    id: "usr_1002",
    nombre: "Laura",
    apellido: "Gómez",
    correo: "laura.gomez@ejemplo.com",
    clave: "$2b$10$abcMockHashClaveSegura456",
    direccion: {
      calle: "Calle Falsa 123",
      ciudad: "Barcelona",
      codigoPostal: "08002",
      pais: "España",
    },
    telefono: "+34698765432",
    fechaNacimiento: "1985-11-22",
    rol: "admin",
    preferencias: {
      notificacionesEmail: false,
      tema: "claro",
    },
    activo: true,
    fechaRegistro: "2026-05-10T14:45:00Z",
  },
  {
    id: "usr_1003",
    nombre: "Andrés",
    apellido: "Silva",
    correo: "andres.silva@ejemplo.com",
    clave: "$2b$10$defMockHashClaveSegura789",
    direccion: {
      calle: "Plaza Mayor 5, 2A",
      ciudad: "Valencia",
      codigoPostal: "46001",
      pais: "España",
    },
    telefono: "+34655443322",
    fechaNacimiento: "2001-03-08",
    rol: "usuario",
    preferencias: {
      notificacionesEmail: true,
      tema: "sistema",
    },
    activo: false,
    fechaRegistro: "2026-10-20T09:15:00Z",
  },
];

export async function userProfileModel() {
  return {
    nombre: "fernando",
    correo: "fer@correo.com",
    password: "123",
  };
}

export async function getUsersModel() {
  return user;
}
