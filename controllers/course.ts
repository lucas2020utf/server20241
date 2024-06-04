import { pool } from "../shared/database";
import { Request, Response, Router } from "express";

const courses = [
  {
    "id": 1,
    "name": "BSI"
  },
  {
    "id": 2,
    "name": "Licenciatura"
  },
]
export async function listCourse(req: Request, res: Response) {
  //conecta com o banco
  //const client = await pool.connect();
  //realiza consulta sql
  //const courses = await client.query(`select * from courses`)
  //retorna consulta em formato json
  return res.status(200).json(courses);
}
export async function saveCourse(req: Request, res: Response) {
  const course = req.body;
  course.id = Math.floor(Math.random() * 50)
  courses.push(course)
  res.status(201).json(courses);
}



