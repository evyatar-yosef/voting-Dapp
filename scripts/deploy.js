
const hre = require("hardhat");

async function main() {
const MANAGER = 1;  // Role.Manager
const CUSTOMER = 2; // Role.Customer

  // Get the contract to deploy
  const VotingSystem = await hre.ethers.getContractFactory("VotingSystem");

  // Deploy the contract (no need to set gas limit or price, Ganache does not charge real gas fees)
  const votingSystem = await VotingSystem.deploy();

  await votingSystem.deployed();

  console.log("VotingSystem deployed to:", votingSystem.address);

  // Add initial users (example)
 try {
   user = await votingSystem.addUser("0xA063E15aC5ebb129878a3De4143F66fB5c226e49", "Alice Manager", CUSTOMER);
   console.log("User added: Alice Manager");
 } catch (error) {
   console.error("Error adding Alice Manager:", error);
 }

  await votingSystem.addUser(
    "0x1E24C8415B154E8E8d26164Cd65fdde7222c077A",  // Replace with a valid address
    "Bob Customer",
    CUSTOMER // Role.Customer
  );
  console.log("User added: Bob Customer");

  const userAddresses = await votingSystem.getAllUsers();
  console.log("User Addresses:", userAddresses);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

