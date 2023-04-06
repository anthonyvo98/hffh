import { utils, Wallet } from "zksync-web3";
import * as ethers from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";

// An example of a deploy script that will deploy and call a simple contract.
export default async function (hre: HardhatRuntimeEnvironment) {
  console.log(`Running deploy script for the ZKLoki contract`);

  // Initialize the wallet.
  const wallet = new Wallet("b31963c8d9628d1b411789d9e70f339959627823a21a400fca8548a1dc3f0537");

  // Create deployer object and load the artifact of the contract we want to deploy.
  const deployer = new Deployer(hre, wallet);
  const artifact = await deployer.loadArtifact("ERC20");

  /*
  // Deposit some funds to L2 in order to be able to perform L2 transactions.
  const depositAmount = ethers.utils.parseEther("0.001");
  const depositHandle = await deployer.zkWallet.deposit({
    to: deployer.zkWallet.address,
    token: utils.ETH_ADDRESS,
    amount: depositAmount,
  });
  // Wait until the deposit is processed on zkSync
  await depositHandle.wait();
*/

  // Deploy this contract. The returned object will be of a `Contract` type, similarly to ones in `ethers`.
  // `greeting` is an argument for contract constructor.
 // const greeting = "Hi there! I`m Sr20de!";
 const greeterContract = await deployer.deploy(artifact);
 // Constant variables in Solidity are variables that are defined with the constant keyword and cannot be changed once they have been set .
 // Show the contract info.
 const contractAddress = greeterContract.address;
 console.log(`${artifact.contractName} was deployed to ${contractAddress}`);
}
