export type PaginationParams = {
  offset: number
  limit: number
}

export type SignerEntity = {
  id: string
  index: number
  activated: boolean
  owner: string
  encryptedShare: string
  createdAt: Date
  updatedAt: Date
}

export type MultisigEntity = {
  id: string
  t: number
  n: number
  name: string
  sqrpriv?: string
  signers: SignerEntity[]
  nonce: number
  createdAt: Date
  updatedAt: Date
}

export type ApprovalEntity = {
  id: number
  signature: string
  randomness: string
  signer: Omit<SignerEntity, 'multisig'>
  createdAt: Date
  updatedAt: Date
}

export type ProposalEntity = {
  id: string
  multisig: Pick<MultisigEntity, 'id'>
  chainId: string
  approvals: ApprovalEntity[]
  msg: string
  raw: string
  R: string
  sqrhz?: string
  ttl: number
  createdAt: Date
  updatedAt: Date
}

export type ApprovalEvents = 'insertApproval' | 'updateSignature'
export type ApprovalEventResponse = ApprovalEntity & {
  proposal: Omit<ProposalEntity, 'approvals'>
}
