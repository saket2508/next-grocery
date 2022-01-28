const path = require('path')
const mySql = require('mysql2')
const envPath = path.resolve(process.cwd(), '.env.local')

require('dotenv').config({ path: envPath })

export const db = process.env.NODE_ENV === 'development' 
    ? mySql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        port: process.env.DB_PORT,
        database: process.env.DB_NAME
    })

    : mySql.createConnection({
        host: process.env.DB_PROD_HOST,
        user: process.env.DB_PROD_USER,
        password: process.env.DB_PROD_PASSWORD,
        database: process.env.DB_PROD_NAME,
        ssl: {}
    })

function query(q, values)  {
    return new Promise((resolve, reject) => {
        db.query(q, values, (err, results) => {
          if(err) {
            console.error(err)
            reject(err)  
          } 
          resolve(results)
        })
    })
}

async function migrate(){
    try {
        // create users table
        await query(`
            CREATE TABLE IF NOT EXISTS users (
                id VARCHAR(36) NOT NULL DEFAULT (uuid()) PRIMARY KEY,
                name VARCHAR(25) NOT NULL,
                email VARCHAR(50) NOT NULL UNIQUE,
                password VARCHAR(60) NOT NULL,
                created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                updated_at 
                    TIMESTAMP 
                    NOT NULL 
                    DEFAULT CURRENT_TIMESTAMP 
                    ON UPDATE CURRENT_TIMESTAMP
            )
        `)
        // create cart table
        await query(`
            CREATE TABLE IF NOT EXISTS cart (
                id INT AUTO_INCREMENT PRIMARY KEY,
                user_id VARCHAR(36) NOT NULL,
                product_id VARCHAR(3) NOT NULL,
                qty INT NOT NULL DEFAULT 1,
                FOREIGN KEY (user_id) REFERENCES users(id),
                created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                updated_at 
                    TIMESTAMP 
                    NOT NULL 
                    DEFAULT CURRENT_TIMESTAMP 
                    ON UPDATE CURRENT_TIMESTAMP
            )
        `)
        console.log('Migration ran successfully')
    } catch (err) {
        console.error(err)
        // exit node program with error code
        process.exit(1)
    }
}

// run migration and exit process if it was successful 
migrate().then(() => process.exit())