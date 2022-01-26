import mysql from 'serverless-mysql'

export const db = mysql({
    config:{
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        port: parseInt(process.env.DB_PORT!)
    }
})

export async function query(
    q: string,
    values: (string | number)[] | string | number = []
): Promise<Array<any> | undefined> {
    try {
        const results: Array<any> = await db.query(q, values)
        await db.end()
        return results
    } catch (err) {
        console.error(err)
    }
}