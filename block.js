const CryptoJS = require('crypto-js');

class Block{
    constructor(index, previous_hash, data){
        this.index = index;
        this.previous_hash = previous_hash;
        this.timestamp = Date.now() / 1000;
        this.data = data;
        this.hash = this.calculateHash();
    }

    // calculateHash(index, previous_hash, timestamp, data) {
    calculateHash() {
        return Block.calculateHash(this.index, this.previous_hash, this.timestamp, this.data);
    };

    toString(){
        return `Index: ${this.index}, Hash: ${this.hash}, Timestamp: ${this.timestamp}`;
    }
}

Block.calculateHash = function(index, previous_hash, timestamp, data){
    return CryptoJS.SHA256(index + previous_hash + timestamp + data).toString();
}
