export default {
    port: 8080,
    dbUri: 'mongodb://localhost:27017/reservations',
    saltWorkFactor: 10,
    accessTokenTtl: '15m',
    refreshTokenTtl: '1y',
    publicKey:
`-----BEGIN PUBLIC KEY-----

-----END PUBLIC KEY-----`,
    privateKey:
`-----BEGIN RSA PRIVATE KEY-----

-----END RSA PRIVATE KEY-----`
}

