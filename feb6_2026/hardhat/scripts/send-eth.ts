// send-eth.ts
import { 
  createWalletClient, 
  createPublicClient, 
  http, 
  parseEther,
  defineChain          
} from 'viem'
import { privateKeyToAccount } from 'viem/accounts'

const hardhatLocal = defineChain({
  id: 31337,
  name: 'Hardhat Local',
  nativeCurrency: {
    decimals: 18,
    name: 'Ether',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: { http: ['http://127.0.0.1:8545'] },
    public:  { http: ['http://127.0.0.1:8545'] },
  },
  testnet: true,
})

// Change only this line
const BUYER_PRIVATE_KEY = '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80' as const;

// You can also change the seller if you want
const SELLER_ADDRESS    = '0x70997970c51812dc3a010c7d01b50e0d17dc79c8 ' as const;  // still Account #1

const AMOUNT_ETH = '0.5'



const account = privateKeyToAccount(BUYER_PRIVATE_KEY)

const walletClient = createWalletClient({
  account,
  chain: hardhatLocal,           // ← Use our custom chain here
  transport: http('http://127.0.0.1:8545'),
})

const publicClient = createPublicClient({
  chain: hardhatLocal,           // ← Same here
  transport: http('http://127.0.0.1:8545'),
})

async function main() {
  console.log('Buyer address     :', account.address)
  console.log('Sending to seller  :', SELLER_ADDRESS)
  console.log('Amount             :', AMOUNT_ETH, 'ETH')

  const balanceBefore = await publicClient.getBalance({ address: account.address })
  console.log('Buyer balance before:', Number(balanceBefore) / 1e18, 'ETH')

  const hash = await walletClient.sendTransaction({
    to: SELLER_ADDRESS,
    value: parseEther(AMOUNT_ETH),
  })

  console.log('Transaction hash   :', hash)

  const receipt = await publicClient.waitForTransactionReceipt({ hash })
  console.log('Transaction confirmed in block', receipt.blockNumber)

  const balanceAfter = await publicClient.getBalance({ address: account.address })
  console.log('Buyer balance after :', Number(balanceAfter) / 1e18, 'ETH')

  const sellerBalanceAfter = await publicClient.getBalance({ address: SELLER_ADDRESS })
  console.log('Seller balance after:', Number(sellerBalanceAfter) / 1e18, 'ETH')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})