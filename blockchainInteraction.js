
const Web3 = require('web3');
const { Client } = require('pg');
const { ethers } = require("ethers");

// Initialize Web3 for Ethereum interaction
const web3 = new Web3('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID');
const contractAddress = '0xYourContractAddress';
const abi = [ /* ABI from the compiled contract */ ];

const account = '0xYourAccountAddress';
const privateKey = '0xYourPrivateKey';

const contract = new web3.eth.Contract(abi, contractAddress);

// PostgreSQL client for database interaction
const client = new Client({
    user: 'your-database-user',
    host: 'localhost',
    database: 'ai_profiles_db',
    password: 'your-database-password',
    port: 5432,
});

client.connect();

// Function to mint an AI Profile token
async function mintProfile(userAddress) {
    const data = contract.methods.mintProfile(userAddress).encodeABI();

    const tx = {
        from: account,
        to: contractAddress,
        gas: 2000000,
        data: data,
    };

    const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);
    const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
    console.log('Transaction Hash:', receipt.transactionHash);
    return receipt.transactionHash;
}

// Function to save AI Profile in the database
async function saveAIProfile(userName, bio, tweets, blockchainAddress, tokenId) {
    const query = 'INSERT INTO ai_profiles(user_name, twitter_bio, tweets, blockchain_address, token_id) VALUES($1, $2, $3, $4, $5)';
    await client.query(query, [userName, bio, tweets, blockchainAddress, tokenId]);
}

// Example function call to mint profile and save it
async function createAndSaveProfile() {
    const userAddress = '0xUserWalletAddress';
    const receipt = await mintProfile(userAddress);
    
    // Save the AI Profile Data into the database
    await saveAIProfile('example_user', 'Tech Enthusiast, AI Advocate', ['Tweet 1', 'Tweet 2'], userAddress, 1);
}

createAndSaveProfile();
