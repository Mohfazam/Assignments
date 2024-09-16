//Assignments 2

const crypto = require('crypto');


function findprefix(prefix){
    let input = 0;
    while(true){
        let str = 'sarwar' + input.toString();
        let hash = crypto.createHash('sha256').update(str).digest('hex');
        if(hash.startsWith(prefix)){
            return str;
        }
        else{
            input++;
        }
    }
}

let result = findprefix('00000');
console.log(result);