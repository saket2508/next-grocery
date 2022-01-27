import { NextApiRequest, NextApiResponse } from 'next';
import { query } from '../../../lib/db'
import authenticate from '../../../middleware/authenticate';

interface CustomRequest extends NextApiRequest{
    user?: any
}

async function handler(req: CustomRequest, res: NextApiResponse) {
    try {
        const currUserid = req.user.id
        const orders = await query(`
            SELECT * FROM cart
            WHERE user_id = ?
            ORDER BY updated_at DESC
        `,
            currUserid
        )
        let users_cart = orders!.map(({ product_id, qty }) => ({ product_id, qty }))
        return res.status(200).json({ users_cart, msg: "Fetched user's cart" })
    } catch (error) {
        console.error(error)
        return res.status(501).json({ msg: "Server Error" })
    }
}

export default authenticate(handler)