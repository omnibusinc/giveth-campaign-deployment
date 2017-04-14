# Giveth Campaign Deploy

## Setup.
- install testrpc if you don't have it: ```npm install -g ethereumjs-testrpc```
- run testrpc: ```testrpc```
- install required node packages: ```npm install```
- install and set up MetaMask

## Running the web client
- ```npm start```

## Running the cli version 
- ```npm run cli_deploy```

## Useful commands for the cli (assuming you're running testrpc on port 8545):
* Run geth, pointing at testrpc: ```geth attach rpc:http://127.0.0.1:8545 console```
* Get list of accounts: ```curl -d '{"jsonrpc":"2.0","method":"eth_accounts","params": [], "id":1}' -X POST http://localhost:8545/```
* Send 1ETH from one account to another: ```curl -d '{"jsonrpc":"2.0","method":"eth_sendTransaction","params": [{"from":"<account1>", "to":"<account2>", "value": 1e18}], "id":1}' -X POST http://localhost:8545/```
* Check account balance: ```curl -d '{"jsonrpc":"2.0","method":"get_balance","params": ['<account>', 'latest'], "id":1}' -X POST http://localhost:8545/```
* Get block at address: ```curl -d '{"jsonrpc":"2.0","method":"eth_accounts","params": [], "id":1}' -X POST http://localhost:8545/```

