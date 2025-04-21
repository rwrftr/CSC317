const helloText = 'Hello World!';

function printString(num, string){
    let count = 0;
    while(count < num){
        console.log(string);
        count++;
    }
}

printString(3,helloText);