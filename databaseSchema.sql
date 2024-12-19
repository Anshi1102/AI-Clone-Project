
-- AI Profiles Table
CREATE TABLE ai_profiles (
    profile_id SERIAL PRIMARY KEY,
    user_name VARCHAR(255) NOT NULL,
    twitter_bio TEXT,
    tweets TEXT[],
    blockchain_address VARCHAR(255),
    token_id INT
);

-- Transactions Table for Blockchain Interactions
CREATE TABLE transactions (
    tx_id SERIAL PRIMARY KEY,
    profile_id INT REFERENCES ai_profiles(profile_id),
    tx_hash VARCHAR(255) NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
