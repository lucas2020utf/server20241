import { Router } from "express";
import { listLivro, saveLivro } from "./controllers/livros";
// import { listCourse, saveCourse } from "./controllers/livros";

const router = Router();

// router.get("/courses", listCourse);
// router.post("/courses", saveCourse)

router.get("/livros", listLivro);
router.post("/livros", saveLivro)

export { router };
