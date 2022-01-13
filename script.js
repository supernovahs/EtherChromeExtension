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
        const lowgas = data.result.SafeGasPrice;
        const fee = data2.result.ethusd;
        const gweiToEth = lowgas / 1000000000;
        const oneGascost = fee * gweiToEth;
        const LowGascost = 21000 * oneGascost;
        const LowFee = document.getElementById("LowFee");
        LowFee.innerHTML = "$" + LowGascost;

        //Medium Gas cost calculation
        const mediumgas = data.result.ProposeGasPrice;
        const medgweiToEth = mediumgas / 1000000000;
        const medoneGascost = fee * medgweiToEth;
        const medGascost = 21000 * medoneGascost;
        const Mediumgas = document.getElementById("MediumFee");
        Mediumgas.innerHTML = "$" + medGascost;

        //High gas cost calculation
        const highgas = data.result.FastGasPrice;
        const fastgweiToEth = highgas / 1000000000;
        const fastoneGascost = fee * fastgweiToEth;
        const fastgascost = 21000 * fastoneGascost;
        const Fastgas = document.getElementById("FastFee");
        Fastgas.innerHTML = "$" + fastgascost;
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
      const safegasinWei = safegas * 1000000000;
      ConfirmationTime(safegasinWei, proposegas, fastgas);

      // BaseFee.innerHTML= basefee;
    });
}
GasInfo();
setInterval(GasInfo, 2000);

function ConfirmationTime(LowGasPrice, MedGasPrice, FastGasPrice) {
  fetch(
    "https://api.etherscan.io/api?module=gastracker&action=gasestimate&gasprice=" +
      LowGasPrice +
      "&apikey=NS4S9UP9T8TDMPVI9H9RWH572AKWQPI4UN"
  )
    .then((data) => data.json())
    .then((timing) => {
      const Lowtime = timing.result;
      const LowTime = document.getElementById("Lowtime");
      LowTime.innerHTML = Lowtime;
    });
  fetch(
    "https://api.etherscan.io/api?module=gastracker&action=gasestimate&gasprice=" +
      MedGasPrice +
      "&apikey=NS4S9UP9T8TDMPVI9H9RWH572AKWQPI4UN"
  )
    .then((data) => data.json())
    .then((timing) => {
      const Medtime = timing.result;
      const MedTime = document.getElementById("MedTime");
      MedTime.innerHTML = Medtime;
    });

  fetch(
    "https://api.etherscan.io/api?module=gastracker&action=gasestimate&gasprice=" +
      FastGasPrice +
      "&apikey=NS4S9UP9T8TDMPVI9H9RWH572AKWQPI4UN"
  )
    .then((data) => data.json())
    .then((timing) => {
      const fasttime = timing.result;
      const FastTime = document.getElementById("FastTime");
      FastTime.innerHTML = fasttime;
    });
}

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
