# AI Personality Clone Project

This project focuses on developing a scalable, blockchain-integrated platform for creating AI clones of digital personalities. By leveraging advanced AI models, prompt engineering, and blockchain technology, the project aims to revolutionize digital interactions through personalized AI agents.

---

## Features

1. **AI Clone Creation**:
   - Simulates Twitter user profiles based on bio, tweets, and interaction patterns.
   - Uses OpenAI GPT models for dynamic conversational interactions.

2. **Blockchain Integration**:
   - Tokenizes AI profiles using Ethereum smart contracts.
   - Supports decentralized exchanges (DEXs) for trading tokenized AI profiles.

3. **Database Management**:
   - Stores AI profile data and transaction records in PostgreSQL.
   - Provides scalability for managing multiple user profiles and interactions.

4. **Open-Source Collaboration**:
   - Codebase encourages community contributions and further development.

---

## Project Structure

```plaintext
.
|-- ai_clone.py                # Python script for AI personality creation.
|-- AIProfileToken.sol         # Solidity smart contract for tokenizing AI profiles.
|-- blockchainInteraction.js   # Node.js backend for blockchain and database integration.
|-- databaseSchema.sql         # SQL schema for PostgreSQL database.
|-- README.md                  # Project documentation.
```

---

## Prerequisites

### Tools and Software

1. [VS Code](https://code.visualstudio.com/) (or any code editor)
2. [Python](https://www.python.org/downloads/)
3. [Node.js](https://nodejs.org/)
4. [PostgreSQL](https://www.postgresql.org/download/)
5. Infura or an Ethereum provider for blockchain interaction

### Libraries and Dependencies

#### Python Dependencies:
```bash
pip install openai
```

#### Node.js Dependencies:
```bash
npm install web3 ethers pg
```

---

## Installation and Setup

### Step 1: Clone the Repository
```bash
git clone https://github.com/your-username/AI-Clone-Project.git
cd AI-Clone-Project
```

### Step 2: Set Up Python Environment
```bash
python -m venv venv
source venv/bin/activate  # For Linux/Mac
# or
venv\Scripts\activate   # For Windows
pip install openai
```

### Step 3: Set Up PostgreSQL
1. Create a database named `ai_profiles_db`.
2. Run the SQL schema to create the necessary tables:
   ```bash
   psql -d ai_profiles_db -f databaseSchema.sql
   ```

### Step 4: Deploy Solidity Contract
1. Use [Remix IDE](https://remix.ethereum.org/) to compile and deploy `AIProfileToken.sol` to Ethereum (or a testnet).
2. Note the deployed contract's ABI and address for integration in the Node.js script.

### Step 5: Set Up Node.js
1. Initialize Node.js dependencies:
   ```bash
   npm install
   ```
2. Update `blockchainInteraction.js` with your contract address, ABI, and Infura project details.

---

## Running the Project

### Step 1: Run the Python Script
```bash
python ai_clone.py
```
- Generates a conversational response using the AI clone.

### Step 2: Run the Node.js Backend
```bash
node blockchainInteraction.js
```
- Mints an AI profile token and saves the profile to the database.

### Step 3: Verify the Database
- Use `psql` or a database client (like pgAdmin) to verify that data is stored correctly in the `ai_profiles` table.

---

## Project Workflow

1. **Data Analysis**:
   - Fetch simulated Twitter data (or replace with live Twitter API data).
2. **AI Clone Generation**:
   - Generate responses mimicking the personality traits of the user.
3. **Tokenization**:
   - Create unique blockchain tokens for each AI profile.
4. **Database Storage**:
   - Save profile and transaction data in PostgreSQL for scalability.

---

## Future Enhancements

1. **Integration with Live Twitter API**:
   - Replace simulated data with real user data using the Twitter API.
2. **Web Interface**:
   - Build a frontend using React or Vue.js for user interaction.
3. **Advanced Blockchain Features**:
   - Add support for decentralized exchanges (DEXs) and prediction markets for AI profiles.
4. **Enhanced AI Models**:
   - Use fine-tuned models for more accurate personality replication.

---

## Contribution Guidelines

1. Fork the repository.
2. Create a new branch for your feature/bug fix.
3. Submit a pull request with a detailed description of your changes.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## Contact

For questions or suggestions, please contact:
- **Email**: anshikasingh1102@gmail.com
- **GitHub**: [Anshi1102](https://github.com/Anshi1102)

---

Happy Coding!

