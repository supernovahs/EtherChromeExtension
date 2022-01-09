fetch(
  "https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=NS4S9UP9T8TDMPVI9H9RWH572AKWQPI4UN "
)
  .then((data) => data.json())
  .then((jokeData) => {
    const safegas = jokeData.result.SafeGasPrice;
    const proposegas = jokeData.result.ProposeGasPrice;
    const fastgas = jokeData.result.FastGasPrice;
    const basefee = jokeData.result.suggestBaseFee;
    const SafeGas = document.getElementById("SafeGas");
    const Proposedgas = document.getElementById("ProposedGas");
    const FastGas = document.getElementById("FastGas");
    const BaseFee = document.getElementById("BaseFee");
    Proposedgas.innerHTML = proposegas;
    SafeGas.innerHTML = safegas;
    FastGas.innerHTML = fastgas;
    BaseFee.innerHTML = basefee;
  });
