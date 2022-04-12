import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('orders.db');

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS orders (id INTEGER PRIMARY KEY NOT NULL, date TEXT NOT NULL, total TEXT NOT NULL, adress TEXT NOT NULL);',
                [],
                () => { resolve(); },
                (_, err) => { reject(err); }
            );
        });
    })
    return promise
}

export const insertOrders = (date, total, adress) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'INSERT INTO orders (date, total, adress) VALUES (?, ?, ?);',
                [date, total, adress],
                (_, result) => { resolve(result); },
                (_, err) => { reject(err); }
            );
        });
    })
    return promise
}

export const loadOrders = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'SELECT * FROM orders;',
                [],
                (_, result) => { resolve(result); },
                (_, err) => { reject(err); }
            );
        });
    })
    return promise
}