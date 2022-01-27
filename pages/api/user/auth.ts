import { NextApiRequest, NextApiResponse } from 'next';
import { query } from '../../../lib/db'
import authenticate from '../../../middleware/authenticate';

interface CustomRequest extends NextApiRequest{
    user?: any
}

async function handler(req: CustomRequest, res: NextApiResponse) {
    try {
        const id = req.user.id
        const currUser: any = await query(`
            SELECT name, email
            FROM users
            WHERE id = ?
        `,
            id
        )
        if(!currUser || currUser.length === 0){
            return res.status(401).json({ msg: 'Sign in Again' })
        }
        return res.status(200).json({ msg: 'Fetched user info', name: currUser[0].name })
    } catch (error) {
        console.error('Error gettting user info', error)
        return res.status(501).json({ msg: 'Server Error' })
    }
}

export default authenticate(handler)