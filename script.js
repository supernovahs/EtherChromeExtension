function helo(){

    fetch('https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=NS4S9UP9T8TDMPVI9H9RWH572AKWQPI4UN ')
    .then(data => data.json())
    .then(jokeData => {
        const safegas = jokeData.result.SafeGasPrice;
        const proposegas= jokeData.result.ProposeGasPrice;
        const fastgas= jokeData.result.FastGasPrice;
        const basefee= jokeData.result.suggestBaseFee;
        const SafeGas = document.getElementById('SafeGas');
        const Proposedgas= document.getElementById('ProposedGas');
        const FastGas= document.getElementById('FastGas');
        // const BaseFee= document.getElementById('BaseFee')
        Proposedgas.innerHTML= proposegas;
        SafeGas.innerHTML = safegas;
        FastGas.innerHTML= fastgas;
        // BaseFee.innerHTML= basefee;
        globalThis.safegas;
    })
    
    fetch('https://api.etherscan.io/api?module=stats&action=ethprice&apikey=NS4S9UP9T8TDMPVI9H9RWH572AKWQPI4UN')
    .then(data=>data.json())
    .then(feefunc=>{    
        //  safegas variable  is not working in this fetch api . Check how to access safegas variable from above fetch to this fetch API .
        // I tried globalthis.safegas command but did not work
        const fee = feefunc.result.ethusd;
        const gweiToEth = safegas/1000000000;
        const oneGascost = fee*gweiToEth;
        const LowGascost = 21000 * oneGascost;
        const LowFee = document.getElementById('LowFee');
        LowFee.innerHTML= LowGascost;
        
        
    })
    

}
helo();
    
    // const LowFee= document.getElementById('LowFee');
    // LowFee.innerHTML = 
    // function cal(x,y) {
    //     y= y/1000000000;
    //     const val = x*y;
    //     const fee = val * 21000;
