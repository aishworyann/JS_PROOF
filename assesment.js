/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTs=[];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name,uid,college,branch) {
    const mint={
        "name" : name,
        "uid" : uid,
        "college" : college,
        "branch" : branch
    };
    NFTs.push(mint);
    console.log("Minted for :", name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i=0;i<NFTs.length;i++){
        console.log("\nID: "+ (i+1));
        console.log("Name: "+NFTs[i].name);
        console.log("UID: "+NFTs[i].uid);
        console.log("COLLEGE: "+NFTs[i].college);
        console.log("BRANCH: "+NFTs[i].branch);

    }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nTotal minted NFTs: "+NFTs.length)
}

// call your functions below this line

mintNFT("Aishworyann","20bcs3706","CU","CSE_IS");
mintNFT("Vibhor","20bcs3680","CU","CSE_IS");
mintNFT("Anurag","20bcs3648","CU","CSE_IS");
mintNFT("Vivek","20bcs4403","CU","CSE_BD");
mintNFT("Yashika","20bcs4821","CU","CSE_AIML");
listNFTs()
getTotalSupply()
