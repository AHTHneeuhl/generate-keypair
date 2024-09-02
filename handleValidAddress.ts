import { PublicKey } from '@solana/web3.js';

/**
 * Validates a Solana wallet address.
 * @param address - The wallet address to validate.
 * @returns boolean - Returns true if the address is valid, otherwise false.
 */
const isValidSolanaAddress = (address: string): boolean => {
    try {
        // Attempt to create a PublicKey object
        new PublicKey(address);
        return true; // No error, so the address is valid
    } catch (error) {
        return false; // If an error is thrown, the address is invalid
    }
}

/**
 * Example function to demonstrate handling an invalid wallet address.
 * @param address - The wallet address to validate and use.
 */
export const handleValidAddress = (address: string) => {
    if (isValidSolanaAddress(address)) {
        console.log(`${address} is valid solana address!`);
        // Proceed with further logic (e.g., sending a transaction)
    } else {
        console.error("Invalid Solana address:", address);
        // Handle the invalid address case (e.g., notify the user)
    }
}
