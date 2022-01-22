const Ethprice = document.getElementById("prices");
const LowgasDollar = document.getElementById("LowFee");
const MediumgasDollar = document.getElementById("MediumFee");
const FastgasDollar = document.getElementById("FastFee");
const Main = document.getElementById("main");
const Loader = document.getElementById("loader");
const LowGas= document.getElementById('SafeGas');
const MedGas= document.getElementById('ProposedGas');
const FastGas= document.getElementById('FastGas');
let LowGascost = null;
let MediumGascost = null;
let FastGasCost = null;
let fee = null;
// let price = null;
let loading = true;

const getFee = () => {
  fetch(
    "https://api.etherscan.io/api?module=stats&action=ethprice&apikey=NS4S9UP9T8TDMPVI9H9RWH572AKWQPI4UN"
  )
    .then((data2) => data2.json())
    .then((data2) => {
      fee = data2.result.ethusd;
    });
};

const getGas = () => {
  fetch(
    "https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=NS4S9UP9T8TDMPVI9H9RWH572AKWQPI4UN "
  )
    .then((data) => data.json())
    .then((data) => {
      const lowgas = data.result.SafeGasPrice;
      const gweiToEth = lowgas / 1000000000;
      const oneGascost = fee * gweiToEth;
      LowGascost = 21000 * oneGascost;
      LowGascost = LowGascost.toFixed(2);
      const lowgaswei= lowgas/1000000000;

      const mediumgas = data.result.ProposeGasPrice;
      const medgweiToEth = mediumgas / 1000000000;
      const medoneGascost = fee * medgweiToEth;
      MediumGascost = 21000 * medoneGascost;
      MediumGascost = MediumGascost.toFixed(2);
      const  mediumgaswei= mediumgas/1000000000;

      const highgas = data.result.FastGasPrice;
      const fastgweiToEth = highgas / 1000000000;
      const fastoneGascost = fee * fastgweiToEth;
      FastGasCost = 21000 * fastoneGascost;
      FastGasCost = FastGasCost.toFixed(2);
      const highgaswei= highgas/1000000000;

      LowGas.innerHTML= lowgas+"Gwei";
      MedGas.innerHTML= mediumgas+"Gwei";
      FastGas.innerHTML= highgas+ "Gwei";

      // ConfirmationTime(lowgaswei,mediumgaswei,highgaswei);
    });
};

// function ConfirmationTime(LowGasPrice, MedGasPrice, FastGasPrice) {
//   fetch(
//     "https://api.etherscan.io/api?module=gastracker&action=gasestimate&gasprice=" +
//       LowGasPrice +
//       "&apikey=NS4S9UP9T8TDMPVI9H9RWH572AKWQPI4UN"
//   )
//     .then((data) => data.json())
//     .then((timing) => {
//       const Lowtime = timing.result;
//       const LowTime = document.getElementById("Lowtime");
//       LowTime.innerHTML = Lowtime;
//     });
//   fetch(
//     "https://api.etherscan.io/api?module=gastracker&action=gasestimate&gasprice=" +
//       MedGasPrice +
//       "&apikey=NS4S9UP9T8TDMPVI9H9RWH572AKWQPI4UN"
//   )
//     .then((data) => data.json())
//     .then((timing) => {
//       const Medtime = timing.result;
//       const MedTime = document.getElementById("MedTime");
//       MedTime.innerHTML = Medtime;
//     });

//   fetch(
//     "https://api.etherscan.io/api?module=gastracker&action=gasestimate&gasprice=" +
//       FastGasPrice +
//       "&apikey=NS4S9UP9T8TDMPVI9H9RWH572AKWQPI4UN"
//   )
//     .then((data) => data.json())
//     .then((timing) => {
//       const fasttime = timing.result;
//       const FastTime = document.getElementById("FastTime");
//       FastTime.innerHTML = fasttime;
//     });
// }

setInterval(() => {
  getFee();
  if (fee !== null) {
    getGas();
  }
  console.log(Main);
  console.log(Loader);
  if (fee && LowGascost && MediumGascost && FastGasCost  ) {
    Ethprice.innerHTML = "$" + fee;
    LowgasDollar.innerHTML = "$" + LowGascost;
    MediumgasDollar.innerHTML = "$" + MediumGascost;
    FastgasDollar.innerHTML = "$" + FastGasCost;
    Loader.classList.add("loading");
    Loader.classList.remove("loader-container");
    Main.classList.remove("loading");
    
  }
}, 1000);
