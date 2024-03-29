/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as splToken from '@solana/spl-token'
import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'
import {
  WithdrawCollateralBumpSeeds,
  withdrawCollateralBumpSeedsBeet,
} from '../types/WithdrawCollateralBumpSeeds.js'
import { Amount, amountBeet } from '../types/Amount.js'

/**
 * @category Instructions
 * @category WithdrawCollateral
 * @category generated
 */
export type WithdrawCollateralInstructionArgs = {
  bump: WithdrawCollateralBumpSeeds
  amount: Amount
}
/**
 * @category Instructions
 * @category WithdrawCollateral
 * @category generated
 */
export const withdrawCollateralStruct = new beet.BeetArgsStruct<
  WithdrawCollateralInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['bump', withdrawCollateralBumpSeedsBeet],
    ['amount', amountBeet],
  ],
  'WithdrawCollateralInstructionArgs',
)
/**
 * Accounts required by the _withdrawCollateral_ instruction
 *
 * @property [] market
 * @property [] marketAuthority
 * @property [] reserve
 * @property [_writable_] obligation
 * @property [**signer**] owner
 * @property [_writable_] depositAccount
 * @property [_writable_] collateralAccount
 * @category Instructions
 * @category WithdrawCollateral
 * @category generated
 */
export type WithdrawCollateralInstructionAccounts = {
  market: web3.PublicKey
  marketAuthority: web3.PublicKey
  reserve: web3.PublicKey
  obligation: web3.PublicKey
  owner: web3.PublicKey
  depositAccount: web3.PublicKey
  collateralAccount: web3.PublicKey
  tokenProgram?: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const withdrawCollateralInstructionDiscriminator = [
  115, 135, 168, 106, 139, 214, 138, 150,
]

/**
 * Creates a _WithdrawCollateral_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category WithdrawCollateral
 * @category generated
 */
export function createWithdrawCollateralInstruction(
  accounts: WithdrawCollateralInstructionAccounts,
  args: WithdrawCollateralInstructionArgs,
  programId = new web3.PublicKey('JPv1rCqrhagNNmJVM5J1he7msQ5ybtvE1nNuHpDHMNU'),
) {
  const [data] = withdrawCollateralStruct.serialize({
    instructionDiscriminator: withdrawCollateralInstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.market,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.marketAuthority,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.reserve,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.obligation,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.owner,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: accounts.depositAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.collateralAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenProgram ?? splToken.TOKEN_PROGRAM_ID,
      isWritable: false,
      isSigner: false,
    },
  ]

  if (accounts.anchorRemainingAccounts != null) {
    for (const acc of accounts.anchorRemainingAccounts) {
      keys.push(acc)
    }
  }

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  })
  return ix
}
