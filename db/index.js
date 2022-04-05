import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('orders.db');

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS orders (id INTEGER PRIMARY KEY NOT NULL, date TEXT NOT NULL, total TEXT NOT NULL, lat REAL NOT NULL, lng REAL NOT NULL);',
                [],
                () => { resolve(); },
                (_, err) => { reject(err); }
            );
        });
    })
    return promise
}

export const insertOrders = (date, total, lat, lng) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'INSERT INTO orders (date, total, lat, lng) VALUES (?, ?, ?, ?);',
                [date, total, lat, lng],
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