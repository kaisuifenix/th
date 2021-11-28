var dados = [
    ["ADRIANA PAULA DE OLIVEIRA","17/08/1973","43","F","022.830.257-96","BRANCO","NILDA BERTINI DE OLIVEIRA","AMAZONAS","SANTA RITA","NOVA IGUACU","RJ","26050-150"],
    ["MARGARETE GOMES DE OLIVEIRA","27/07/1983","38","F","053.405.756-08","BRANCO","MARIA DAS GRACAS DE OLIVEIRA","AMAZONAS","QUITANDINHA","PETROPOLIS","RJ","25650-490"],
    ["ALESSANDRA DE ALMEIDA MARQUES BAZIL","13/11/1979","42","F","084.394.417-03","PRETA","ANGELINA RODRIGUES DE ALMEIDA MARQUES","CEARA","QUITANDINHA","PETROPOLIS","RJ","25651-270"],
    ["ANA LUCIA DE ALMEIDA TOME BAZIL","19/02/1989","32","F","131.917.097-89","PRETA","ANGELA LUCIA DE ALMEIDA TOME","CEARA","QUITANDINHA","PETROPOLIS","RJ","25551-220"],
    ["KAIQUE DE SOUZA BAZIL","14/11/2003","18","M","224.029.807-37","PRETA","ERICA CRISTINA DE SOUZA","CEARA","QUITANDINHA","PETROPOLIS","RJ","25651-220"],
    ["ALEXSANDRO COREIA BAZIL","28/03/1987","34","M","134.218.577-33","PRETA","MARILENE CORREIA","CEARA","QUITANDINHA","PETROPOLIS","RJ","25651-220"],
    ["THASSIA DE FREITAS VENANCIO","18/02/1997","24","F","166.687.787-55","PRETA","VALERIA DE FREITAS VENANCIO","JOAQUIM GOMENSORO","VALPARAÍSO","PETROPOLIS","RJ","25655-374"],
    ["VALERIA DE FREITAS VENANCIO","04/07/1965","24","F","883.385.507-44","PRETA","TENILMA ELHOTERIO DE FREITAS","JOAQUIM GOMENSORO","VALPARAÍSO","PETROPOLIS","RJ","25655-374"],
    ["ANA LUIZA ASSIS PAIVA","07/02/2003","18","F","177.956.297-76","PRETA","NATALIA ASSIS DE SOUZA","PRESIDENTE CAFE FILHO","VALPARAISO","PETROPOLIS","RJ","25665-443"],   
    ["MARCIA CRISTINA LOPES ALVES DE SOUZA","07/03/1960","61","F","916.673.647-15","Branca","ALFA LOPES ALVES","VICENZO RIVETTI","CARANGOLA","PETROPOLIS","RJ","25715-363"],   
    ["MARILIA RODRIGUES PEREIRA","20/04/1963","58","F","788.179.007-53","Branca","MARILIA RODRIGUES PEREIRA","MICHEL SALOMANI","MOSELA","PETROPOLIS","RJ","25675-320"],   
    ["NATALIA SOARES BAZIL","27/11/1990","31","F","061.863.087-23","PRETA","ROSARIA SOARES FRANCISCO","MATO GROSSO","QUITANDINHA","PETROPOLIS","RJ","25651-220"],   
    ["RENATA FERREIRA DE ALMEIDA","27/08/1985","36","F","148.822.857-46","Branca","MARLENE FERREIRA DE ALMEIDA","AMOZONAS","SANTA RITA","NOVA IGUACU","RJ","26050-650"],   
    ["SAMUEL PEREIRA DA SILVA","24/07/1995","26","M","157.466.677-06","PRETA","MARIA HELENA FERREIRA DA SILVA","RIO GRANDE SO SUL","QUITANDINHA","PETROPOLIS","RJ","25651-230"],
    ["SABRINA DE ALMEIDA OLIVEIRA MOREIRA","09/06/1987","34","F","116.920.667-06","BRANCA","ANA LUCIA CARDOSO DE ALMEIDA OLIVEIRA","MATO GROSSO","QUITANDINHA","PETROPOLIS","RJ","25651-220"]
];

var tbody = document.getElementById('tbody');
for (var i = 0; i < dados.length; i++) {
     var tr = '<tr>' +
     '<td><div class="d-flex align-items-center"><div><i class="bx bx-file me-2 font-24 text-success"></i></div><div class="font-weight-bold text-success">'+dados[i][0]+'</div></td>'+
     '<td>'+dados[i][1]+'</td>'+
     '<td>'+dados[i][2]+'</td>'+
     '<td>'+dados[i][3]+'</td>'+
     '<td>'+dados[i][4]+'</td>'+
     '<td>'+dados[i][5]+'</td>'+
     '<td>'+dados[i][6]+'</td>'+
     '<td>'+dados[i][7] +'</td>'+
     '<td>'+dados[i][8]+'</td>'+
     '<td>'+dados[i][9]+'</td>'+
     '<td>'+dados[i][10]+'</td>'+
     '<td>'+dados[i][11]+'</td>'+
     '</tr>';
     tbody.innerHTML+=tr;
     
};
var tr = tbody.childNodes;

// Buscar
document.getElementById('txtBusca').addEventListener('keyup', function() {
    var busca = document.getElementById('txtBusca').value.toLowerCase();

    for (var i = 0; i < tbody.childNodes.length; i++) {
        var achou = false;
        var tr = tbody.childNodes[i];
        var td = tr.childNodes;

        for (var j = 0; j < td.length; j++) {
            var value = td[j].childNodes[0].nodeValue.toLowerCase();

            if (value.indexOf(busca) >= 0) {
                achou = true;
            }
        }
            if (achou) {
            tr.style.display = "table-row";
        } else {
            tr.style.display = "none";
        }
        }
});