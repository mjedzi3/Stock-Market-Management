// Import the database variable from config
import db from "../config/db.js";

// Return all Stocks (READ)
export const getStocks=(result) => {
    db.query("SELECT * FROM stocks", (err,results) => {
        if (err) {              // Fail
            console.log(err);
            result(err, null);
        } else {                // Success
            result(null, results);
        }
    });
};

// Return all Portfolio (READ)
export const getPortfolio=(result) => {
    db.query("SELECT * FROM portfolio", (err,results) => {
        if (err) {              // Fail
            console.log(err);
            result(err, null);
        } else {                // Success
            result(null, results);
        }
    });
};

// Return only one Stock from Portfolio (READ)
export const getSharebyId=(id,result) => {
    db.query("SELECT * FROM portfolio WHERE stock_id = ?", [id], (err,results) => {
        if (err) {              // Fail
            console.log(err);
            result(err, null);
        } else {                // Success
            result(null, results[0]);
        }
    });
};

// Return only one Stock from Stocks (READ)
export const getStockbyId=(id,result) => {
    db.query("SELECT * FROM stocks WHERE stock_id = ?", [id], (err,results) => {
        if (err) {              // Fail
            console.log(err);
            result(err, null);
        } else {                // Success
            result(null, results[0]);
        }
    });
};

// Add new stock in Stocks (CREATE)
export const createStock=(data,result) => {
    db.query("INSERT INTO stocks SET ?", [data], (err,results) => {
        if (err) {              // Fail
            console.log(err);
            result(err, null);
        } else {                // Success
            result(null, results);
        }
    });
};

// Add new shares of stock in Portfolio (CREATE)
export const createShares=(data,result) => {
    db.query("INSERT INTO portfolio SET ?", [data], (err,results) => {
        if (err) {              // Fail
            console.log(err);
            result(err, null);
        } else {                // Success
            result(null, results);
        }
    });
};

// Update existing stock in Stocks (UPDATE)
export const updateStockById=(data, id, result) => {
    db.query("UPDATE stocks SET stock_name = ?, stock_value = ? WHERE stock_id = ?",
    [data.stock_name, data.stock_value, id], (err,results) => {
        if (err) {              // Fail
            console.log(err);
            result(err, null);
        } else {                // Success
            result(null, results);
        }
    });
};

// Update existing shares in Portfolio (UPDATE)
export const updateShareById=(data, id, result) => {
    db.query("UPDATE portfolio SET stock_name = ?, number_shares = ? WHERE stock_id = ?",
    [data.stock_name, data.number_shares, id], (err,results) => {
        if (err) {              // Fail
            console.log(err);
            result(err, null);
        } else {                // Success
            result(null, results);
        }
    });
};

// Delete existing stock in Stocks (DELETE)
export const deleteStockById=(id, result) => {
    db.query("DELETE FROM stocks WHERE stock_id = ?", [id], (err,results) => {
        if (err) {              // Fail
            console.log(err);
            result(err, null);
        } else {                // Success
            result(null, results);
        }
    });
};

// Delete existing shares in Portfolio (DELETE)
export const deleteShareById=(id, result) => {
    db.query("DELETE FROM portfolio WHERE stock_id = ?", [id], (err,results) => {
        if (err) {              // Fail
            console.log(err);
            result(err, null);
        } else {                // Success
            result(null, results);
        }
    });
};