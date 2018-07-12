
let args = process.argv.slice(2).join("");

function expandPowers(value){
    
    try{

    // parse string
    let tmp = value.split("^");
    if(tmp.length !== 2){
        throw new Error('Try 2 arguments.');
    }

    // extract contents
    let base = tmp[0];
    let power = Number(tmp[1]);

    // check if base is a negative or fraction and does not contain brackets
    if((base.indexOf('-') > -1 || base.indexOf('/') > -1) &&
                 base.indexOf('(') === -1 && base.indexOf(')') === -1){
        base = `(${base})`; //add brackets
    }

    // expand
    let expansion = `${base}^${power} = `;
    for(let i = 0; i < power; ++i){

        expansion += base;

        if(i < power - 1){
            expansion += ' x ';
        }
    }

    return expansion;
    
    } catch(e){
        return e.message;
    }
}

console.log(expandPowers(args));
console.log(Number(1/2));

// TODO: Handle inverse fractions to be expanded