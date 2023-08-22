const mysql = require('mysql2/promise');
const pool = mysql.createPool({host: 'localhost',
    user: 'root',
    password: '',
    database: 'ecom'
})

// get all
async function getAll() {
    return await pool.query('select * from product');
}

async function destroy(id) {
    await pool.query('delete from product where id = ?', [id]);
}

module.exports = { getAll , destroy }
