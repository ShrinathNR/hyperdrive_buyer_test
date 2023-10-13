import wallet from "../wallet-keypair(1).json";
import { Connection, Keypair, PublicKey, Commitment, LAMPORTS_PER_SOL } from "@solana/web3.js";
import * as anchor from "@coral-xyz/anchor";
import { Program, Wallet,AnchorProvider, Address, BN} from "@project-serum/anchor";
import { Counter, IDL } from "../counter_idl";

const marketplaceProgramId = new PublicKey(
  "8rNARYhUWKwzRx9QesdMBVeMJCJqqH6eH4sgtHseXpNr"
);
const commitment : Commitment = "confirmed";


const buyer = Keypair.fromSecretKey(new Uint8Array(wallet));
const connection = new Connection("https://api.devnet.solana.com", commitment);
// const provider = new anchor.AnchorProvider(connection, new anchor.Wallet(buyer), {commitment});
const provider = new AnchorProvider(connection, new Wallet(buyer), {commitment});
console.log(`buyer : ${buyer.publicKey}`);

const counterAccount = Keypair.generate();
const seller_programId = new PublicKey("5FuKCyGsRx1JcoDdHiGqpHi9PzQoTyZfqPBpTAneqGZH");
const counter_program = new Program<Counter>(IDL, "5FuKCyGsRx1JcoDdHiGqpHi9PzQoTyZfqPBpTAneqGZH",provider);
const accessPda = PublicKey.findProgramAddressSync([Buffer.from("access"), buyer.publicKey.toBuffer(), seller_programId.toBuffer()],marketplaceProgramId)[0];

(async()=>{
  try {
    console.log('check for access pda and intialize!');
  const sig = await counter_program.methods.initialize(seller_programId)
  .accounts({
    counterAccount: counterAccount.publicKey,
      user: buyer.publicKey,
      accessPda: accessPda,
  })
  .signers([counterAccount])
  .rpc();

  if(true){
    const inc1 = await counter_program.methods.increase(new anchor.BN(1))
      .accounts({
        counterAccount: counterAccount.publicKey,
        accessPda: accessPda,
      })
      .rpc();
    if(inc1) console.log('increase1!')
    const inc2 = await counter_program.methods.increase(new anchor.BN(1))
    .accounts({
      counterAccount: counterAccount.publicKey,
      accessPda: accessPda,
    })
    .rpc();
    if(inc2) console.log('increase2!')

  }
  } catch (error) {
    console.error(`something went wrong ${error}`);
  }
  

})();

// describe('setting seller program and access', () => {
//     console.log(`buyer : ${buyer.publicKey}`);

//     const counterAccount = anchor.web3.Keypair.generate();
//     anchor.setProvider(anchor.AnchorProvider.env());
//     const seller_programId = new PublicKey("5FuKCyGsRx1JcoDdHiGqpHi9PzQoTyZfqPBpTAneqGZH");
//     const counter_program = new anchor.Program<Counter>(IDL, seller_programId,anchor.getProvider());
//     const solAmount = 10 * LAMPORTS_PER_SOL;
//     const accessPda = PublicKey.findProgramAddressSync([Buffer.from("access"), buyer.publicKey.toBuffer(), seller_programId.toBuffer()],marketplaceProgramId)[0];
  
//     it('check for access pda and intialize!', async () => {
//       await counter_program.methods.initialize(seller_programId)
//       .accounts({
//         counterAccount: counterAccount.publicKey,
//           user: anchor.AnchorProvider.env().wallet.publicKey,
//           systemProgram: SystemProgram.programId,
//           accessPda: accessPda,
//       })
//       .signers([counterAccount])
//       .rpc()
//       .then(confirmTx);    
//     });
//     it('increase1!', async () => {
//       await counter_program.methods.increase(new anchor.BN(1))
//       .accounts({
//         counterAccount: counterAccount.publicKey,
//         accessPda: accessPda,
//       })
//       .rpc()
//       .then(confirmTx);    
//     });
//     it('increase2!', async () => {
//       await counter_program.methods.increase(new anchor.BN(1))
//       .accounts({
//         counterAccount: counterAccount.publicKey,
//         accessPda: accessPda,
//       })
//       .rpc()
//       .then(confirmTx);    
//     });

//     //close the acc in website and check it again
//   });