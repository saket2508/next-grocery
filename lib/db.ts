import { rejects } from 'assert'
import mySql from 'mysql2'

export const db = process.env.NODE_ENV === 'development' 
    ? mySql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        port: parseInt(process.env.DB_PORT!),
        database: process.env.DB_NAME
    })

    : mySql.createConnection({
        uri: process.env.DB_URI
    })

export function query(
    q: string,
    values: (string | number)[] | string | number = []
) : Promise<any | undefined> {
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