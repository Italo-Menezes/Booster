"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PointsController_1 = __importDefault(require("./controllers/PointsController"));
const ItemsController_1 = __importDefault(require("./controllers/ItemsController"));
const router = express_1.default.Router();
const pointsController = new PointsController_1.default();
const itemsController = new ItemsController_1.default();
router.get("/items", itemsController.index);
router.post("/points", pointsController.create);
router.get("/points", pointsController.index);
router.get("/points/:id", pointsController.show);
exports.default = router;
