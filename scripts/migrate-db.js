const path = require('path')
const mySql = require('serverless-mysql')
const envPath = path.resolve(process.cwd(), '.env.local')

require('dotenv').config({ path: envPath })

const db = mySql({
    config:{
        host: process.env.DB_HOST,
        database: process.env.DB_DATABASE,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT
    }
})

async function query(q){
    try {
        const results = await db.query(q)
        await db.end()
        return results
    } catch (err) {
        console.error(err)
    }
}

async function migrate(){
    try {
        // create users table
        await query(`
            CREATE TABLE IF NOT EXISTS users (
                id VARCHAR(36) NOT NULL DEFAULT (uuid()) PRIMARY KEY,
                name VARCHAR(25) NOT NULL,
                email VARCHAR(50) NOT NULL,
                password BINARY(40) NOT NULL,
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