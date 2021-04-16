require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict robot flock tribe strategy response often unveil grace light army gaze'; 
let testAccounts = [
"0x61ac4a8192d38c7efe439e491ce6c8e9b3ef084c6517c200446800c07c01722f",
"0x556f21c918d7e8b922472b36355f5088e51557bfa0c6a8d35a01495b45ba7bba",
"0x72b0c49a1214006eef9d30f799080ec8efaab8ac2e955bf3915603f6b8cc7120",
"0x966df442c5588516686a10abfcbef2e8bdd0f665d39e718d8846bfe0a02bec99",
"0x2f1f2032a997e1728d012fb651cc499eb6c6c79a34fcfc98072f727d36c07308",
"0xff8c36d258822e88ce7d2fddf25720e610d4fdf5d383ca38194f995ac844bc6c",
"0x05cf4519630bf5407d407c0302ec4a91ac9fda1b2ec2073bb73bd1b539f389ee",
"0x4e08dda4b5c1cb188f8fea5894863f1f558fb863e52be6a6edf6eb34293c9e05",
"0xf3cbe0aa5bb7bdde5f0df20d87b657ebb054e2842a991b0df5993e2823afe60a",
"0x3eea444ffdb8d5804653c420c236cd8daa0570eaf2ee44ea5bd38510ad36d67a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
