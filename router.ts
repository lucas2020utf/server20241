import { Router } from "express";
import { listCourse, saveCourse } from "./controllers/course";
const router = Router();

router.get("/courses", listCourse);
router.post("/courses", saveCourse)

export { router };
