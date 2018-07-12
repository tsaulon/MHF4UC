
let args = process.argv.slice(2).join("");

function expandPowers(value){
    
    //parse string
    let tmp = value.split("^");

    //extract contents
    let base = tmp[0];
    let power = Number(tmp[1]);

    let expansion = `${value} = `;
    for(let i = 0; i < power; ++i){

        expansion += base;

        if(i < power - 1){
            expansion += ' x ';
        }
    }

    return expansion;
}

console.log(expandPowers(args));

// TODO: Handle inverse fractions to be expanded