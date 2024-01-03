// Add express
import express from "express";

// import func from controller
import {
    showStocks,
    showPortfolio,
    showStockById,
    showShareById,
    addStocks,
    addShares,
    updateStock,
    updateShare,
    deleteStock,
    deleteShare
} from "../controller/stock.js";

// create the router from express
const router = express.Router();

// get all stocks
router.get("/stocks", showStocks);

// get all portfolio stocks
router.get("/portfolio", showPortfolio);

// get all portfolio stocks
router.get("/stocks/:id", showStockById);

// get all portfolio stocks
router.get("/portfolio/:id", showShareById);

// add stock to stocks
router.post("/stocks", addStocks);

// add stock to portfolio
router.post("/portfolio", addShares);

// update stock in stocks
router.put("/stocks/:id", updateStock);

// update shares in portfolio
router.put("/portfolio/:id", updateShare);

// delete stock in stocks
router.delete("/stocks/:id", deleteStock);

// delete shares in portfolio
router.delete("/portfolio/:id", deleteShare);

// export the router
export default router;