import express from "express"
import { getHomePage, getTemplate, postCreateUser } from "../controllers/homeController.mjs";
const router = express.Router();

router.get('/', getHomePage)
router.get("/home", getTemplate)
router.post("/create-user", postCreateUser)


export default router;