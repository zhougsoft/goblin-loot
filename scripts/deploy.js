const hre = require('hardhat');

const CONTRACT_NAME = 'GoblinLoot';

async function main() {
	const contractFactory = await hre.ethers.getContractFactory(CONTRACT_NAME);
	const contract = await contractFactory.deploy();
	await contract.deployed();
	console.log('Contract deployed to: ', contract.address);
}

main()
	.then(() => process.exit(0))
	.catch(error => {
		console.error(error);
		process.exit(1);
	});
