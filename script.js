fetch(
  "https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=NS4S9UP9T8TDMPVI9H9RWH572AKWQPI4UN "
)
  .then((data) => data.json())
  .then((data) => {
    fetch(
      "https://api.etherscan.io/api?module=stats&action=ethprice&apikey=NS4S9UP9T8TDMPVI9H9RWH572AKWQPI4UN"
    )
      .then((data2) => data2.json())
      .then((data2) => {
        //Low gas Cost 
        const lowgas= data.result.SafeGasPrice;
        const fee = data2.result.ethusd;
        const gweiToEth = lowgas/1000000000;
        const oneGascost = fee * gweiToEth;
        const LowGascost = 21000 * oneGascost;
        const LowFee = document.getElementById('LowFee');
        LowFee.innerHTML= "$" +LowGascost;
        //Medium Gas cost calculation
        const mediumgas= data.result.ProposeGasPrice;
        const medgweiToEth= mediumgas/1000000000;
        const medoneGascost= fee*medgweiToEth;
        const medGascost = 21000 * medoneGascost;
        const Mediumgas= document.getElementById('MediumFee');
        Mediumgas.innerHTML= "$" +medGascost;
        


        //High gas cost calculation
        const highgas = data.result.FastGasPrice;
        const fastgweiToEth= highgas/1000000000;
        const fastoneGascost = fee*fastgweiToEth;
        const fastgascost = 21000*fastoneGascost;
        const Fastgas= document.getElementById('FastFee');
        Fastgas.innerHTML= "$" +fastgascost;

      });
  });

function Pricefunc() {
  fetch(
    "https://api.etherscan.io/api?module=stats&action=ethprice&apikey=NS4S9UP9T8TDMPVI9H9RWH572AKWQPI4UN"
  )
    .then((data) => data.json())
    .then((price) => {
      const fee = price.result.ethusd;
      const Ethprice = document.getElementById("price");
      Ethprice.innerHTML = "$" + fee;
    });
}
setInterval(Pricefunc, 1000);
  function GasInfo() {
  fetch(
    "https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=NS4S9UP9T8TDMPVI9H9RWH572AKWQPI4UN "
  )
    .then((data) => data.json())
    .then((jokeData) => {
      const safegas = jokeData.result.SafeGasPrice;
      const proposegas = jokeData.result.ProposeGasPrice;
      const fastgas = jokeData.result.FastGasPrice;
      const basefee = jokeData.result.suggestBaseFee;
      const gasusedratio = jokeData.result.gasUsedRatio;
      const SafeGas = document.getElementById("SafeGas");
      const Proposedgas = document.getElementById("ProposedGas");
      const FastGas = document.getElementById("FastGas");
      // const BaseFee= document.getElementById('BaseFee')
      Proposedgas.innerHTML = proposegas + "Gwei";
      SafeGas.innerHTML = safegas + "Gwei";
      FastGas.innerHTML = fastgas + "Gwei";
      // BaseFee.innerHTML= basefee;
    });
}
GasInfo();
setInterval(GasInfo, 1000);

// .then(fetch('https://api.etherscan.io/api?module=stats&action=ethprice&apikey=NS4S9UP9T8TDMPVI9H9RWH572AKWQPI4UN'))
// .then(data=>data.json())
// .then(fees=>{
//     const fee = fees.result.ethusd;
//     const gweiToEth = safegas/1000000000;
//     const oneGascost = fee * gweiToEth;
//     const LowGascost = 21000 * oneGascost;
//     const LowFees = document.getElementById('LowFee');
// LowFees.innerHTML= LowGascost;

// })

// fetch('https://api.etherscan.io/api?module=stats&action=ethprice&apikey=NS4S9UP9T8TDMPVI9H9RWH572AKWQPI4UN')
// .then(data=>data.json())
// .then(feefunc=>{
//  // Not working safegas variable . Check how to access safegas variable from above fetch to this fetch API .
// // I tried globalthis.safegas command but did not work
// const fee = feefunc.result.ethusd;
// const gweiToEth = safegas/1000000000;
// const oneGascost = fee * gweiToEth;
// const LowGascost = 21000 * oneGascost;
// const LowFee = document.getElementById('LowFee');
// LowFee.innerHTML= LowGascost;

// })

// const LowFee= document.getElementById('LowFee');
// LowFee.innerHTML =
// function cal(x,y) {
//     y= y/1000000000;
//     const val = x*y;
//     const fee = val * 21000;

// CLock

let clock = () => {
  let date = new Date();
  let hrs = date.getHours();
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  let period = "AM";
  if (hrs == 0) {
    hrs = 12;
  } else if (hrs >= 12) {
    hrs = hrs - 12;
    period = "PM";
  }
  hrs = hrs < 10 ? "0" + hrs : hrs;
  mins = mins < 10 ? "0" + mins : mins;
  secs = secs < 10 ? "0" + secs : secs;

  let time = `${hrs}:${mins}:${secs}:${period}`;
  clock = document.getElementById("time").innerText = time;
};

setInterval(clock, 1000);
clock();

