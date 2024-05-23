"use strict";
//Q:37 Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message 
// that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, 
// and a shirt of any size with a different message.
function make_shirt2(size, message) {
    console.log(`you have orderes a ${size} sized shirt with the message: "${message}"`);
}
// calling the function
make_shirt2("Large", "I love typeScript");
// creat a meddium shirt with the default message.
make_shirt2("Medium", "I love typeScript");
// creat a shirt of any  size with the different message.
make_shirt2("Small", "keep calm and code on!");
