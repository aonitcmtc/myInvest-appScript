//SET STATIC
var secretKey = '64811870e13359bda5fc35c87d0f052f';

// Base64 URL encoding and decoding functions
function base64urlEncode(str) {
    return btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

// Base64 URL encoding and decoding functions
function base64urlDecode(str) {
    str = str.replace(/-/g, '+').replace(/_/g, '/');
    const padding = str.length % 4;
    if (padding) {
        str += '='.repeat(4 - padding);
    }
    return atob(str);
}

// Encode (Sign) the JWT
function encodeJWT(payload, secret) {
    const header = { alg: 'HS256', typ: 'JWT' };
    const encodedHeader = base64urlEncode(JSON.stringify(header));
    const encodedPayload = base64urlEncode(JSON.stringify(payload));
    const signature = base64urlEncode(CryptoJS.HmacSHA256(encodedHeader + '.' + encodedPayload, secret));
    return encodedHeader + '.' + encodedPayload + '.' + signature;
}

// Decode (Verify) the JWT
function decodeJWT(token, secret) {
    const [encodedHeader, encodedPayload, signature] = token.split('.');
    const header = JSON.parse(base64urlDecode(encodedHeader));
    const payload = JSON.parse(base64urlDecode(encodedPayload));
    const expectedSignature = base64urlEncode(CryptoJS.HmacSHA256(encodedHeader + '.' + encodedPayload, secret));
    if (signature !== expectedSignature) {
        throw new Error('Invalid signature');
    }
    return payload;
}

// // Example payload
// const payload = {
//     user_id: 123456,
//     username: 'example_user'
// };

// // Example secret key
// const secretKey = '64811870e13359bda5fc35c87d0f052f';

// // Encode (Sign) the JWT
// const encodedJWT = encodeJWT(payload, secretKey);
// console.log("Encoded JWT:", encodedJWT);

// // Decode (Verify) the JWT
// try {
//     const decodedPayload = decodeJWT(encodedJWT, secretKey);
//     console.log("Decoded JWT:", decodedPayload);
// } catch (error) {
//     console.error("JWT verification failed:", error.message);
// }
