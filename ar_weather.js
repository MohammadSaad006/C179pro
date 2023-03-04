let coordinats= {}

$(document).ready(function(){
  getcoordinates()  
})

function getcoordinates  (){
    let searchParam= new URLSearchParams(window.location.search)
    
    if (searchParam.has("source")&&searchParam.has("destination")){

        let source= searchParam.get("source")
        let destination=searchParam.get("destination")

        coordinats.source_lat=source.split(";")[0]
        coordinats.source_lng=source.split(";")[1]

        coordinats.destination_lat=destination.split(";")[0]
        coordinats.destination_lng=destination.split(";")[1]

    }
    else {
        alert("Co-ordinate is not selected")
        window.history.back()
    }
}