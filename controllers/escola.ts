import { pool } from "../shared/database";
import { Request, Response, Router } from "express";

// const courses = [
//   {
//     "id": 1,
//     "name": "BSI"
//   },
//   {
//     "id": 2,
//     "name": "Licenciatura"
//   },
// ]

const escola = [
  {
    "id": 1,
    "name": "BSI"
  },
  {
    "id": 2,
    "name": "Licenciatura"
  },
]

// export async function listStudents(req: Request, res: Response) {
//   //conecta com o banco
//   const client = await pool.connect();
//   //realiza consulta sql
//   const courses = await client.query(`select * from courses`)
//   //retorna consulta em formato json
//   return res.status(200).json(students);
// }

export async function listEscolas(req: Request, res: Response) {
  //conecta com o banco
  const client = await pool.connect();
  //realiza consulta sql
  const escolas = await client.query(`select * from escola`)
  //retorna consulta em formato json
  return res.status(200).json(escolas);
}

// export async function saveStudents(req: Request, res: Response) {
//   const students = req.body;
//   student.id = Math.floor(Math.random() * 50)
//   students.push(students)
//   res.status(201).json(students);
// }

export async function saveEscolas(req: Request, res: Response) {
  const escolas = req.body;
  escolas.id = Math.floor(Math.random() * 50)
  escolas.push(escolas)
  res.status(201).json(escolas);
}

export async function deleteEscolas(req: Request, res: Response) {
  //conecta com o banco
  const client = await pool.connect();
  const id = req.params.id
  try {
    const response = await client.query(`delete from escola where id=${id}`);
    res.status(200).json({"message": "Registro Excluido"})
  } catch (error) {
    res.status(404).json({message:error});
  }finally {
client.release()
  }
}


