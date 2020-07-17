var Contador = 1;

function MensajeLog(text) {
    $("#Bitacora").prepend(Contador + ": " + text + "<br/>");
    Contador++;
}


function EnviaCoordenasQualitas() {
    var request = new XMLHttpRequest();

    request.open("POST", "https://qa.qualitas.com.mx:7005/PMQ-API-MOVIL/rest/grua/coordenadaExterna", true);
    request.setRequestHeader("Authorization", "Basic cmVzdGdhcHA6U1JZejY6U3BVXA==");
    //request.setRequestHeader("Host", "qa.qualitas.com.mx");
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
    //request.setRequestHeader("Content-Length", data.length);
    //MensajeLog(`Logitud de los datos: ${data.length}`);
    //MensajeLog(`Datos: ${data}`);
    request.send(data);
    request.onload = function () {
        if (request.status != 200) { // analyze HTTP status of the response
            MensajeLog(`Error ${request.status}: ${request.statusText}`); // e.g. 404: Not Found
        } else { // show the result
            MensajeLog(`Done, got ${request.response.length} bytes`); // response is the server
        }
    };

    request.onprogress = function (event) {
        if (event.lengthComputable) {
            MensajeLog(`Received ${event.loaded} of ${event.total} bytes`);
        } else {
            MensajeLog(`Received ${event.loaded} bytes`); // no Content-Length
        }

    };

    MensajeLog.onerror = function () {
        MensajeLog("Request failed");
    };



    // view request status
    //alert(request.status);
    //MensajeLog(`Datos: ${request.status}`);
    //MensajeLog(Contador + ".- Resultado Post.");
    //MensajeLog(request.responseText);
    //ontador++;
}


$(document).ready(function () {
    MensajeLog("Inicio Exitoso V7");
    var CicloEnvio = setInterval(EnviaCoordenasQualitas, 30000);
    //MensajeLog("2.- Ciclo para envío de datos iniciado a 15 segundos.");
});
