//Import statement 
//We can import anything from any location or library
//there are 2 types of import ... in this script we are using Named import {}
//import {....} from 'libraryName';

import { createPublicClient, http } from 'viem'
import { localhost} from 'viem/chains'
 
//calling createPublicClient()....Method with object as actual argument 
//createPublicClient(aa1)
//createPublicClient({})
//createPublicClient({property:value})

const client = createPublicClient({ 
  chain: localhost,                          //p1:v1
  transport: http(),                         //p2:v2
}) 

console.log('createPublicClient>>>>', createPublicClient)
console.log('client >>>>>', client);