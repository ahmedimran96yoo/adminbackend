import jwt from 'jsonwebtoken'
const jwtKey = "fuck you ! bitch"
const createToken = (id) => {
    return jwt.sign({ id }, jwtKey, {
        expiresIn: 7 * 24 * 60 * 60
    })
}
export default createToken
