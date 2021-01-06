






function loadCPU(url) {
    fetch(url).then(data => {
        data.text().then(data => {
            console.log(data)
            
        })
    })
}
loadCPU("https://csa2020studentapi.azurewebsites.net/rpsls")


