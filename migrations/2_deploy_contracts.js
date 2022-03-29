const VeryValuableCoin = artifacts.require("VeryValuableCoin");

module.exports = function(deployer) {
  deployer.deploy(VeryValuableCoin, 1000000);
};