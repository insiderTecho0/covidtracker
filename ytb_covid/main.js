// HTML OBJECTS
let infect = document.querySelector('#infect_data')
let death = document.querySelector('#death_data')
let recover = document.querySelector('#recover_data')
let btn = document.querySelector('#btn')



async function Main(type,country){
    try{
        let data
        let new_data
        if(type==="global"){
            data = await fetch('https://covid19.mathdro.id/api')
            
        }else if(type==='country'){
            data = await fetch(`https://covid19.mathdro.id/api/countries/${country}`)
        }
        new_data = await data.json()
        
        //console.log(new_data)

        let confirmed = addCommas(new_data.confirmed.value)
        let deaths = addCommas(new_data.deaths.value)
        let recovered = addCommas(new_data.recovered.value)

        //console.log(confirmed,deaths,recovered)

        showData(confirmed,deaths,recovered)
    }catch{
        alert("Some error occured or invalid country.")
    }
    
}
Main('global')

function showData(con,dea,rec){
    infect.innerHTML = con
    death.innerHTML = dea
    recover.innerHTML = rec
}

btn.addEventListener('click',()=>{
    let input = document.querySelector('#r_value').value
    Main('country',input)
})

function addCommas(nStr){
    nStr += '';
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
     x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}