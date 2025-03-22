import mysql from 'mysql2/promise';

export const db = mysql.createPool({
    host: 'localhost',       // or your DB host
    user: 'root',
    password: 'Ayush@007',
    database: 'portfolio',
});
