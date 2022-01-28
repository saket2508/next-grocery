import { NextApiRequest, NextApiResponse } from 'next'
import * as cookie from 'cookie'

async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        res.setHeader('Set-Cookie', cookie.serialize('token', '', {
            maxAge: -1,
            path: '/'
        }))
        return res.status(201).json({ msg: 'User signed out' })
    } catch (error) {
        console.error(error)
        return res.status(501).json({ msg: "Server Error" })
    }
}

export default handler