import { Router } from "express";
import { deleteLivro, listLivro, saveLivro } from "./controllers/livros";
import { listEscolas, saveEscolas, deleteEscolas } from "./controllers/escola";
// import { listCourse, saveCourse } from "./controllers/livros";

const router = Router();

// router.get("/courses", listCourse);
// router.post("/courses", saveCourse)
// router.delete("/courses/:id", deleteCourse);

router.get("/livros", listLivro);
router.post("/livros", saveLivro);
router.delete("/livros/:id", deleteLivro);

router.get("/escola", listEscolas);
router.post("/escola", saveEscolas);
router.delete("/escola/:id", deleteEscolas);

export { router };
