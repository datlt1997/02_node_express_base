import express from "express"
import { getHonePage, getTemplate } from "../controllers/homeController.mjs";
const router = express.Router();

router.get('/', getHonePage)

router.get("/home", getTemplate)


export default router;