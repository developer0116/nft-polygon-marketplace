const Market = artifacts.require('./NFTMarket.sol')
const NFT = artifacts.require('./NFT.sol')

module.exports = async function(deployer){
	await deployer.deploy(Market);
	const marketContract = await Market.deployed();
	const marketAddress = marketContract.address;
	//console.log(marketAddress);
	await deployer.deploy(NFT,marketAddress);
};