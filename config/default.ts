export default {
    port: 8080,
    dbUri: 'mongodb://localhost:27017/reservations',
    saltWorkFactor: 10,
    accessTokenTtl: '15m',
    refreshTokenTtl: '1y',
    publicKey:
`-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCSIGP1lIPodXAIKtM0pxIyMJO5
vBXKUbrfHyOxHPG3y+3gjDuLA9PsVMaQWHpCKSqUyg01dij+0FCNsh1fS+I18bDE
lPzERw18nhIn1GNTlLNGpqy/rxxaAb/dsKsmUIM1u0O29KQYkYpfzganhrsVoilC
K+cXH+wHFdSrNoHpUwIDAQAB
-----END PUBLIC KEY-----`,
    privateKey:
`-----BEGIN RSA PRIVATE KEY-----
MIICXwIBAAKBgQCSIGP1lIPodXAIKtM0pxIyMJO5vBXKUbrfHyOxHPG3y+3gjDuL
A9PsVMaQWHpCKSqUyg01dij+0FCNsh1fS+I18bDElPzERw18nhIn1GNTlLNGpqy/
rxxaAb/dsKsmUIM1u0O29KQYkYpfzganhrsVoilCK+cXH+wHFdSrNoHpUwIDAQAB
AoGBAI07fSFor61HhEaAja4AJFgaF02W+kCXidQJFsgiP4XzNjCnmQ0dYAC1V01A
FrpHa35vYyDe2XSfBpxNIJJwl2sq8p4qbCajKwVTFvtk9K9/nOWnXMrkKGrQg9qT
7moRuj89je4Rp8uWNJFvfclUdhWnhmoBvIFhPgwftanVyhThAkEA6w7c0thpvqkF
f4SZqK7xW16DW5HX4Q7ZSp409JImE++g+6Mh2LbNY8JOGC2747z+Hyoln5G63x3z
aa5lb1CmqQJBAJ8lM+ez8hoRScXOq78+xc58riF5rcniePW7gBwlKn6ZFv4OcxS1
kmIFoa2jV6JQ4OdhXREg8evBwsDkQGnCmZsCQQCxWGdXVRyDUzbovPzJ/iPvkeF9
pw2/qdpbp/3AQLwl8nf9I1mYDmPsTl9pcqf97Uu167CzMdpSGGDcbU3urGTxAkEA
np7tCi9Pym2a0z637kk5zSJ2SMVH06YYHA0DlonwvfgGc7ihOW30diDY0gGxcgYc
9GIV6eGlXu9kFvApx3//qwJBANGF++l9/A4p9caCLDtF6+m1pH8M29Qx+SCswdrH
4J5jgbwFKOqupj4WczywiKgPmgwmcC8K3nX1O7ciiBOJv9U=
-----END RSA PRIVATE KEY-----`
}

