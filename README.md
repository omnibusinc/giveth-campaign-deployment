# Giveth Campaign Deploy

## Setup.
- install git if you dont have it se the instructions here: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
- install testrpc if you don't have it: ```npm install -g ethereumjs-testrpc```
- in your terminal type `git clone https://github.com/omnibusinc/giveth-campaign-deployment` to clone this directory
- once it clones, cd into that directory
- install required node packages: ```npm install```
- install and set up MetaMask
- For Local TESTRPC use, import the following Private Key into MetaMask: ```4f3edf983ac636a65a842ce7c78d9aa706d3b113bce9c46f30d7d21715b23b1d```

## Running the web client with Local Testrpc
- In a terminal, run: ```testrpc --deterministic```.  Leave this running
- Point MetaMask to ```Localhost 8545```
- In a second terminal, run: ```npm start```
- Navigate to ```localhost:8080``` or ```localhost:3001``` in your browser with MetaMask installed.

## Running the web client on public networks
- Point MetaMask to the network you want to deploy to (Ropsten, Morden, Main)
- In the terminal, run: ```npm start```
- Navigate to ```localhost:8080``` or ```localhost:3001``` in your browser with MetaMask installed. 
