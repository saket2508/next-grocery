import * as jwt from 'jsonwebtoken'

export function jwtGenerator(id: string){
    const payload = {
        id
    }
    return jwt.sign(payload, 'secret', { expiresIn:'7 days' })
}