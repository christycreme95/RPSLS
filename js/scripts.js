







// fetch("https://csa2020studentapi.azurewebsites.net/rpsls")
//     .then(data => {
//     data.text()
//     .then(value=>console.log(value))
// })

let info;
async function getCPU(){
    let promise = await fetch("https://csa2020studentapi.azurewebsites.net/rpsls")
    info = await promise.text();
    console.log(info);
}
getCPU();



