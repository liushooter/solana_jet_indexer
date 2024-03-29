/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as splToken from '@solana/spl-token'
import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'
import { Amount, amountBeet } from '../types/Amount.js'

/**
 * @category Instructions
 * @category Borrow
 * @category generated
 */
export type BorrowInstructionArgs = {
  bump: number
  amount: Amount
}
/**
 * @category Instructions
 * @category Borrow
 * @category generated
 */
export const borrowStruct = new beet.BeetArgsStruct<
  BorrowInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['bump', beet.u8],
    ['amount', amountBeet],
  ],
  'BorrowInstructionArgs',
)
/**
 * Accounts required by the _borrow_ instruction
 *
 * @property [] market
 * @property [] marketAuthority
 * @property [_writable_] obligation
 * @property [_writable_] reserve
 * @property [_writable_] vault
 * @property [_writable_] loanNoteMint
 * @property [**signer**] borrower
 * @property [_writable_] loanAccount
 * @property [_writable_] receiverAccount
 * @category Instructions
 * @category Borrow
 * @category generated
 */
export type BorrowInstructionAccounts = {
  market: web3.PublicKey
  marketAuthority: web3.PublicKey
  obligation: web3.PublicKey
  reserve: web3.PublicKey
  vault: web3.PublicKey
  loanNoteMint: web3.PublicKey
  borrower: web3.PublicKey
  loanAccount: web3.PublicKey
  receiverAccount: web3.PublicKey
  tokenProgram?: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const borrowInstructionDiscriminator = [
  228, 253, 131, 202, 207, 116, 89, 18,
]

/**
 * Creates a _Borrow_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category Borrow
 * @category generated
 */
export function createBorrowInstruction(
  accounts: BorrowInstructionAccounts,
  args: BorrowInstructionArgs,
  programId = new web3.PublicKey('JPv1rCqrhagNNmJVM5J1he7msQ5ybtvE1nNuHpDHMNU'),
) {
  const [data] = borrowStruct.serialize({
    instructionDiscriminator: borrowInstructionDiscriminator,
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
      pubkey: accounts.obligation,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.reserve,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.vault,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.loanNoteMint,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.borrower,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: accounts.loanAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.receiverAccount,
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
