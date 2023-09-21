const sql = require('mssql')
const dbSettings = {
  user: 'GalenhosAutorizationE',
  password: 'GalenHos2008r2',
  server: '192.168.1.150',
  database: 'SIGH',
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: false, // for azure
    trustServerCertificate: true // change to true for local dev / self-signed certs
  }
}

export async function getConnection(){
  try {
    const pool = await sql.connect(dbSettings);
    return pool;
  } catch (error) {
    console.error(error)
  }
  
}

getConnection();

