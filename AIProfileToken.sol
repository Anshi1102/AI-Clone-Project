
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AIProfileToken {
    string public name = "AI Profile Token";
    string public symbol = "AIPT";
    uint256 public totalSupply;
    mapping(address => uint256) public balanceOf;
    mapping(uint256 => address) public profileOwners;
    uint256 public profileCount;

    event Transfer(address indexed from, address indexed to, uint256 value);

    constructor(uint256 _initialSupply) {
        totalSupply = _initialSupply * (10 ** 18);  // Tokens have 18 decimal places
        balanceOf[msg.sender] = totalSupply;
        profileCount = 0;
    }

    function mintProfile(address to) public returns (uint256) {
        profileCount++;
        profileOwners[profileCount] = to;
        emit Transfer(address(0), to, 1);  // Mint a new profile token
        return profileCount;
    }

    function transfer(address to, uint256 amount) public returns (bool) {
        require(balanceOf[msg.sender] >= amount, "Insufficient balance");
        balanceOf[msg.sender] -= amount;
        balanceOf[to] += amount;
        emit Transfer(msg.sender, to, amount);
        return true;
    }
}
