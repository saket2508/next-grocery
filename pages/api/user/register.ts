import { NextApiRequest, NextApiResponse } from 'next';
import { query } from '../../../lib/db'
import { jwtGenerator } from '../../../utils/jwtGenerator';
import * as cookie from 'cookie'
import bcrypt from 'bcrypt'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { name, email, password } = req.body
        const user_exists: any = await query(`
            SELECT *
            FROM users
            WHERE email = ?
            LIMIT 1
        `,
            email
        )
        if(user_exists.length > 0) {
            return res.status(401).json({ msg: 'Email already taken' })
        }
        const salt_round = 10
        const salt = await bcrypt.genSalt(salt_round)
        const encryped_pass = await bcrypt.hash(password, salt)
        // add user in the database
        await query(`
            INSERT INTO users (name, email, password)
            VALUES (?, ?, ?)
        `,
            [name, email, encryped_pass]
        )
        // Get the new user from the database
        const new_user: any = await query(`
            SELECT id, name
            FROM users
            WHERE email = ?
        `,
            email
        )
        const token = jwtGenerator(new_user[0].id)
        res.setHeader(
            "Set-Cookie",
            cookie.serialize("token", token, {
              httpOnly: true,
              maxAge: 60 * 60 * 24 * 7,
              sameSite: "strict",
              path: "/",
            })
          )
        res.status(201).json({ "success": true, message: "Registered user", username: new_user[0].name })
    } catch (error) {
        console.error('Error signing up user: ', error)
        return res.status(501).json({ msg: 'Server Error' })   
    }
}