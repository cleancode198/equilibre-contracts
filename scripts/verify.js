
async function main(){
    await hre.run("verify:verify", {address: "0x10B7A410D0d66B14ea32f1AAA9dc2d7931f22642",
        constructorArguments: [
            "0x0439bE66E17c9fd1d7c52Fdc923076B0A1d45294",
            "0x669C381CFCE6473Ceb4C8a95e2A9a3584297396C",
            "0xa1c457f68699bEe7D649F647363eEE69BCEF2AaA",
            "0xBEEdf0AD80B1655DF191A36476854F4F92c78D59"
        ]});
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

