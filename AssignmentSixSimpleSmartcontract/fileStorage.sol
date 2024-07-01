// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract FileStorage {

    struct File {
        string name;
        string ipfsHash;
    }

    File[] public files;

    function addFile(string memory _name, string memory _ipfsHash) public {
        files.push(File({
            name: _name,
            ipfsHash: _ipfsHash
        }));
    }

    function getFile(uint _index) public view returns (string memory, string memory) {
        File memory file = files[_index];
        return (file.name, file.ipfsHash);
    }
}
