function show(){

    let country = input.value

    fetch(`https://api.weatherapi.com/v1/current.json?key=d55c270f83b34f6691992516220812&q=${country}&aqi=no`)
        .then((result)=>{
           result.json()
           .then((data)=>{
            populationData(data);
           }) 
        })
        function populationData(data){
            let name = data.location.name
            let lat = data.location.lat
            let lon = data.location.lon
            let temp = data.current.temp_c
            let icon = data.current.condition.icon
            let text = data.current.condition.text
            console.log(name);


            htmlData=`<img src="${icon}">
                      <h4 style="border-left:5px blue solid; border-radius:5px; padding:5px;"><i>Location</i>: ${name}</h4>
                      <p class="mt-3">Lattitude: ${lat}</p>
                      
                      <p>Longitude: ${lon}</p>
                      <p><i>Condition</i>: _${text}_</p>
                      <h6>Temperature: ${temp}c</h6>`

            output.innerHTML = htmlData
        }
    }