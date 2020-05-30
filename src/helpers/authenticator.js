import jwt from 'jsonwebtoken';
/**
 * Handles jwt signing and verification
 * @class authenticator
 */
class authenticator {
  /**
   * verify a jwt secret using either the provided key or JWT_SECRET
   * @param {String} token jwt token to be verified
   * @param {String} key secret key to be used for verification, defaults to JWT_SECRET
   * @returns {String} payload
   * @throws a jwt error object on verification failure
   * @memberof authenticator
   */
  static verifyToken(token, key = process.env.JWT_KEY) {
    // eslint-disable-next-line no-useless-catch
    try {
      const payload = jwt.verify(token, key);
      return payload;
    } catch (error) {
      throw error;
    }
  }
}

export default authenticator;
