import userActions from '../actions/userActions';
const w3 = require('Web3');
const provider_endpoint = process.argv[2] ? process.argv[2].substr(2) : 'http://localhost:8545';
let web3;
if (typeof window.web3 !== 'undefined') {
  web3 = new w3(window.web3.currentProvider);
} else {
  web3 = new w3(new w3.providers.HttpProvider(provider_endpoint));
}
// if (typeof web3 !== 'undefined') {
//   web3 = new w3(web3.currentProvider);
// } else {
//   web3 = new w3(new w3.providers.HttpProvider(provider_endpoint));
// }

export function setAccount() {
    return {
        type: userActions.SET_ACCOUNT,
        payload: { data: web3.eth.accounts[0] }
    }
}