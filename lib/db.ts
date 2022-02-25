import mysql from 'mysql2/promise';

export const pool =
    process.env.NODE_ENV === 'development'
        ? mysql.createPool({
              host: process.env.DB_HOST,
              user: process.env.DB_USER,
              password: process.env.DB_PASSWORD,
              port: parseInt(process.env.DB_PORT!),
              database: process.env.DB_NAME,
          })
        : mysql.createPool({
              host: process.env.DB_PROD_HOST,
              user: process.env.DB_PROD_USER,
              password: process.env.DB_PROD_PASSWORD,
              database: process.env.DB_PROD_NAME,
              ssl: {},
          });

export async function query(
    q: string,
    values: (string | number)[] | string | number = []
): Promise<any> {
    try {
        const conn = await pool.getConnection();
        const [rows, fields] = await conn.query(q, values);
        await conn.release();
        return rows;
    } catch (error) {
        console.error(error);
    }
}
