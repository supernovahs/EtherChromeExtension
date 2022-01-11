// import {ethers} from "ethers";  
// const url = "http://127.0.0.1:48545/";
// const customHttpProvider = new ethers.providers.JsonRpcProvider(url);
// customHttpProvider.getBalance("0xB641A0a47F2dBAD74FA1288420666598133C9cBa").then((result) => {
    
//     const hello = document.getElementById('helloworld');
//     hello.innerHTML= result;
// });

import {ethers} from "ethers";
const url = 'http://127.0.0.1:48545/';
const customHttpProvider = new ethers.providers.JsonRpcProvider(url);
const blockawait = await customHttpProvider.getBlock(13982351);
console.log(blockawait);
