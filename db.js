const Pool = require('pg').Pool
const pool = new Pool({
    user: "postgres",
    password: "1234Sed",
    host: "localhost",
    port: 5432,
    database: "noded_table_SPA"
})


module.exports = pool