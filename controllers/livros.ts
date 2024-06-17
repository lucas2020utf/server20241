import { pool } from "../shared/database";
import { Request, Response, Router } from "express";

// export async function listCourse(req: Request, res: Response) {
//   //conecta com o banco
//   const client = await pool.connect();
//   //realiza consulta sql
//   const courses = await client.query(`select * from courses`)
//   //retorna consulta em formato json
//   return res.status(200).json(courses.rows);
// }

export async function listLivro(req: Request, res: Response) {
  //conecta com o banco
  const client = await pool.connect();
  //realiza consulta sql
  const livros = await client.query(`select * from livros`)
  //retorna consulta em formato json
  return res.status(200).json(livros.rows);
}

// export async function saveCourse(req: Request, res: Response) {
//   const course = req.body;
//   // verifica o erro
//   console.log(course)
//   //conecta com o banco
//   const client = await pool.connect();
//   //realiza consulta sql
//   const response = await client.query(`INSERT INTO courses (name) VALUES ('${course.name}')`)
//   res.status(201).json(response);
// }

export async function saveLivro(req: Request, res: Response) {
  const livro = req.body;
  // verifica o erro
  console.log(livro)
  //conecta com o banco
  const client = await pool.connect();
  //realiza consulta sql
  const response = await client.query(`INSERT INTO livro (name) VALUES ('${livro.name}')`)
  res.status(201).json(response);
}



