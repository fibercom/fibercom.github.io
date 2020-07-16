var Contador = 3;

function EnviaCoordenasQualitas() {
    var request = new XMLHttpRequest();
    request.open("POST", "http://qa.qualitas.com.mx:7005/PMQ-API-MOVIL/rest/grua/coordenadaExterna", false);
    request.setRequestHeader("Authorization", "Basic cmVzdGdhcHA6U1JZejY6U3BVXA==");
    request.setRequestHeader("Host", "qa.qualitas.com.mx");
    request.setRequestHeader("Content-Type", "application/json");
    //request.setRequestHeader("Content-Length", "222");
    var data = JSON.stringify({
        "reporte": "04203319783",
        "claveProveedor": "33078",
        "numeroGrua": "07",
        "latitud": "19.3605516",
        "longitud": "-99.1893483",
        "placas": "96AH7H",
        "telefono": "5615344025",
        "nombreOperador": "JORGE PONCE"
    }
    );
    Bitacora.innerHTML = `${data} <br>`;
    request.send(data);
    // view request status
    alert(request.status);
    Bitacora.innerHTML = Contador + ".- Resultado Post. <br>";
    Bitacora.innerHTML = request.responseText;
    Bitacora.innerHTML = "<br>";
    Contador++;
}


$(document).ready(function () {
    Bitacora.innerHTML = "1.- Inicio Exitoso <br>";
    var CicloEnvio = setInterval(EnviaCoordenasQualitas, 5000);
    Bitacora.innerHTML = "2.- Ciclo para envío de datos iniciado.";
});
