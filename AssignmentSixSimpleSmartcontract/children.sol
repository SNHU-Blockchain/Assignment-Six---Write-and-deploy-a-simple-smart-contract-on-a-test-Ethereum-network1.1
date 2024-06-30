// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract ChildStore {

    struct Child {
        string name;
        uint age;
    }

    Child[] public children;

    function createChildren() public {
        Child memory child = Child({
            name: "John",
            age: 5
        });
        children.push(child);
    } 

    function changeChildInMemory(uint newAge) public view {
        Child memory child = children[0];
        child.age = newAge;
    }

    function changeChildInStorage(uint newAge) public {
        Child storage child = children[0];
        child.age = newAge;
    }

    function changeChildCallData(string calldata newName) public {
        Child storage child = children[0];
        child.name = newName;
    }

}