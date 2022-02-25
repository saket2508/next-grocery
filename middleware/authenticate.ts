import * as cookie from 'cookie';
import * as jwt from 'jsonwebtoken';
import { NextApiHandler } from 'next';
import { NextApiRequest, NextApiResponse } from 'next';

interface CustomRequest extends NextApiRequest {
    user?: any;
}

export default function authenticate(handler: NextApiHandler) {
    return (req: CustomRequest, res: NextApiResponse) => {
        let jwt_cookie = req.headers.cookie;
        if (!jwt_cookie) {
            return res.status(403).json({ msg: 'Authorization Denied' });
        }
        try {
            let key = cookie.parse(jwt_cookie).token;
            const curr_user = jwt.verify(key, process.env.JWT_SECRET!);
            req.user = curr_user;
            return handler(req, res);
        } catch (error) {
            console.error(error);
            return res.status(401).json({ msg: 'Token Invalid' });
        }
    };
}
