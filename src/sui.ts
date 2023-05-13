import { TransactionBlock, isValidSuiAddress } from '@mysten/sui.js'

/**
 * Validate Sui address
 * @param address Sui address
 * @returns true/false
 */
export const isSuiAddress = (
  address: string | undefined,
): address is string => {
  if (!address) return false
  try {
    const ok = isValidSuiAddress(address)
    return ok
  } catch (er) {
    return false
  }
}

/**
 * Convert a compressed pubkey to a Sui address
 * @param pubkey Compressed pubkey
 * @returns Sui address
 */
export { toSuiAddress } from '@desig/supported-chains'

/**
 * Add signture to a Sui transaction
 * @param transaction The Sui transaction
 * @param { sig, addr } signature The product of `Proposal.finalizaSignature` extended the signer address
 * @returns
 */
export const addSuiSignature = (
  transaction: TransactionBlock,
  { sig, addr }: { sig: Uint8Array; addr: string },
) => {
  console.warn(
    'There is no available signature adding action in Sui. Read more: https://github.com/MystenLabs/sui/blob/main/sdk/typescript/src/providers/json-rpc-provider.ts#L480',
  )
  return transaction
}
