import mysql from 'serverless-mysql'

export const db = mysql({
    config:{
        host: process.env.DB_HOST,
        database: process.env.DB_DATABASE,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        port: parseInt(process.env.DB_PORT!)
    }
})

async function query(
    q: string,
    values: (string | number)[] | string | number = []
) {
    try {
        const results = await db.query(q, values)
        await db.end()
        return results
    } catch (err) {
        console.error(err)
    }
}