import { createRequire } from "module";
const require = createRequire(import.meta.url);
const express = require("express");
import authMiddleWare from "../middleware/auth.js";
import { placeOrder } from "../controllers/orderController.js";

const orderRouter = express.Router();
orderRouter.post("/place",authMiddleWare,placeOrder);

export default orderRouter;