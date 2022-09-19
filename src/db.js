const mysql2 = require("mysql2/promise");

async function connectDB() {
  const connection = await mysql2.createConnection({
    database: "mysqlapp",
    user: "08q90k15qa80loops0jp",
    host: "us-east.connect.psdb.cloud",
    password: "pscale_pw_j6P2CGe9gYvDGDGxHgG3i5U4A2L7He07Za9B73hVntH",
    ssl: { rejectUnauthorized: false },
  });

  const result = await connection.query("SELECT 'Hello World' AS Result");
  console.log(result);
}

module.exports = connectDB;
