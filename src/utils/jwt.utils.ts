// import jwt from "jsonwebtoken";
// import config from "config";

// export function signJwt(
//   object: Object,
//   keyName: "accessTokenPrivateKey" | "refreshTokenPrivateKey",
//   options?: jwt.SignOptions | undefined
// ) {
//   const signingKey = Buffer.from(
//     config.get<string>(keyName),
//     "base64"
//   ).toString("ascii");

//   return jwt.sign(object, signingKey, {
//     ...(options && options),
//     algorithm: "RS256",
//   });
// }

// export function verifyJwt(
//   token: string,
//   keyName: "accessTokenPublicKey" | "refreshTokenPublicKey"
// ) {
//   const publicKey = Buffer.from(config.get<string>(keyName), "base64").toString(
//     "ascii"
//   );

//   try {
//     const decoded = jwt.verify(token, publicKey);
//     return {
//       valid: true,
//       expired: false,
//       decoded,
//     };
//   } catch (e: any) {
//     console.error(e);
//     return {
//       valid: false,
//       expired: e.message === "jwt expired",
//       decoded: null,
//     };
//   }
// }
import jwt from "jsonwebtoken";
import config from "config";

const privateKey = config.get<string>('privateKey');
const publicKey = config.get<string>('publicKey');

export function signJwt(object: Object, options?: jwt.SignOptions | undefined) {
  return jwt.sign(object, privateKey, {
    ...(options && options),
    algorithm: "RS256",
  });
}
export function verifyJwt(token: string) {
  try {
    const decoded = jwt.verify(token, publicKey);
    return {
      valid: true,
      expired: false,
      decoded,
    }
  } catch (e:any) {
    return {
      valid: false,
      expired: e.message === "jwt expired",
      decoded: null,
    };
  }
}
// export function signJwt(
//   object: Object,
//   keyName: "accessTokenPrivateKey" | "refreshTokenPrivateKey",
//   options?: jwt.SignOptions | undefined
// ) {
//   const signingKey = Buffer.from(
//     config.get<string>(keyName),
//     "base64"
//   ).toString("ascii");

//   return jwt.sign(object, signingKey, {
//     ...(options && options),
//     algorithm: "RS256",
//   });
// }

// export function verifyJwt(
//   token: string,
//   keyName: "accessTokenPublicKey" | "refreshTokenPublicKey"
// ) {
//   const publicKey = Buffer.from(config.get<string>(keyName), "base64").toString(
//     "ascii"
//   );

//   try {
//     const decoded = jwt.verify(token, publicKey);
//     return {
//       valid: true,
//       expired: false,
//       decoded,
//     };
//   } catch (e: any) {
//     console.error(e);
//     return {
//       valid: false,
//       expired: e.message === "jwt expired",
//       decoded: null,
//     };
//   }
// }