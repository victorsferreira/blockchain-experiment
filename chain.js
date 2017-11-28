const Block = require('./Block');

class Chain{
    constructor(){
        this.list = [];

        var genesis_block = new Block(0,'','');
        this.list.push(genesis_block);
    }

    generateNextBlock(data){
        var latest_block = getLatestBlock();
        var next_index = latest_block.index + 1;
        return new Block(next_index, latest_block.hash, data);
    }

    replace(list){
        if(!this.isValid(list)){
            console.log("Can't replace list. New list is invalid.")
        }else if(list.length <= this.list.length){
            console.log("Can't replace list. New list is not longer than the current one.")
        }else{
            console.log('Replacing list');
            this.list = list;
            broadcast();
        }
    }

    blockIsValid(block){
        var latest_block = getLatestBlock();

        if(latest_block.index + 1 !== block.index){
            console.log('Invalid block: Index error.', block.toString());
            return false;
        }else if(latest_block.hash !== block.previous_hash){
            console.log('Invalid block: Previous hash error.', block.toString());
            return false;
        }else if(block.previous_hash){
            console.log('Invalid block: Hash error.', block.toString());
            return false;
        }

        return true;
    }
}
