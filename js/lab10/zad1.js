'use strict';

class Node{
    constructor(nodeAddress){
        this.nodeAddress = nodeAddress;
        this.nodes = {};
    }
    toString(){
        return this.nodeAddress;
    }
    getAddress(){
        return this.nodeAddress;
    }
    equals(node){
        return this.getAddress() === node.getAddress();
    }
    connectTo(node){
        this.nodes[node.getAddress()] = node;
    }

    isConnected(node, prevNode=undefined){
        // Check if node id directly connected.
        if(this.equals(node) || node.getAddress() in this.nodes){
            return true;
        }
        // Check if node is connected throught subnodes.
        else{
            for(let nextNode of Object.values(this.nodes)){
                if(prevNode && prevNode.equals(nextNode)){
                    // Do not move backward.
                    continue;
                }
                if( nextNode.isConnected(node, prevNode=this) ){
                    return true;
                }
            }
        }
        // Here we are sure the node is not connected.
        return false;
    }
}

class Network{
    constructor(){
        this.nodes = {};
    }

    toString(){
        return JSON.stringify(this.nodes);
    }

    createNode(address){
        this.nodes[address] = new Node(address);
        return this.nodes[address];
    }

    execCommand(command){
        const parts = command.split(' ');
        if(parts.length < 3){
            return new Error('Unknown command');
        }
        if(parts[0] === 'T'){
            return this.testConnection(parts[1], parts[2]);
        }
        if(parts[0] === 'B'){
            return this.buildConnection(parts[1], parts[2]);
        }
        return new Error('Unknown command');
    }

    testConnection(address1, address2){
        const node1 = this.nodes[address1],
              node2 = this.nodes[address2];
        if(node1 && node2){
            return node1.isConnected(node2);
        }
        else{
            return false;
        }
    }

    buildConnection(address1, address2){
        let node1 = this.nodes[address1]? this.nodes[address1]: this.createNode(address1),
            node2 = this.nodes[address2]? this.nodes[address2]: this.createNode(address2);
        node1.connectTo(node2);
        node2.connectTo(node1);
        return `Connection between ${node1.toString()} and ${node2.toString()} has been created.`;
    }
}

const commands = [
    "B 1 2",
    "B 1 3",
    "B 10 11",
    "B 11 2",
    "T 1 3",
    "T 10 3",
];

const network = new Network();

for(const cmd of commands){
    console.log(cmd);
    console.log( network.execCommand(cmd) );
}

