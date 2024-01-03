//import functions from Model Folder
import {
    getStocks,
    getPortfolio,
    getStockbyId,
    getSharebyId,
    createStock,
    createShares,
    updateStockById,
    updateShareById,
    deleteStockById,
    deleteShareById
} from "../model/StockModel.js";

// Return all Stocks
export const showStocks=(req,res) => {
    getStocks((err,results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
};

// Return all Portfolio
export const showPortfolio=(req,res) => {
    getPortfolio((err,results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
};

// Return only one Stock from Portfolio
export const showStockById=(req,res) => {
    getStockbyId(req.params.id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
};

// Return only one Stock from Portfolio
export const showShareById=(req,res) => {
    getSharebyId(req.params.id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
};

// Add new stock in Stocks
export const addStocks=(req,res) => {
    const data = req.body;
    createStock(data,(err,results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
};

// Add new shares of stock in Portfolio
export const addShares=(req,res) => {
    const data = req.body;
    createShares(data,(err,results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
};

// Update existing stock in Stocks
export const updateStock=(req,res) => {
    const data = req.body;
    const id = req.params.id;
    updateStockById(data,id,(err,results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
};

// Update existing share in Portfolio
export const updateShare=(req,res) => {
    const data = req.body;
    const id = req.params.id;
    updateShareById(data,id,(err,results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
};

// Delete existing stock in Stocks
export const deleteStock=(req,res) => {
    const id = req.params.id;
    deleteStockById(id,(err,results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
};

// UpdDeleteate existing stock in Stocks
export const deleteShare=(req,res) => {
    const id = req.params.id;
    deleteShareById(id,(err,results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
};