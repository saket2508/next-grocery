import * as jwt from 'jsonwebtoken';

export function jwtGenerator(id: string) {
    const payload = {
        id,
    };
    return jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: '7 days' });
}
