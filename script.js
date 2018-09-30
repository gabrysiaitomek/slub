function odliczanie(){
    var dzisiaj = new Date();

    var rok = dzisiaj.getFullYear();

    var miesiac = dzisiaj.getMonth();
    miesiac = miesiac + 1;
    if (miesiac < 10){
        miesiac = "0" + miesiac;
    }

    var dzien = dzisiaj.getUTCDate();
    if (dzien < 10){
        dzien = "0" + dzien;
    }

    var godzina =  dzisiaj.getHours();
    if (godzina < 10){
        godzina = "0" + godzina;
    }

    var minuta = dzisiaj.getMinutes();
    if (minuta < 10){
        minuta = "0" + minuta;
    }

    var sekunda = dzisiaj.getSeconds();
    if (sekunda < 10){
        sekunda = "0" + sekunda;
    }

    date_future = new Date("2020-08-22 15:00:00");
    date_now = new Date();

    // DIFFERENCE IN SECONDS
    var delta = Math.abs(date_future - date_now) / 1000; 
    var days = Math.floor(delta / 60 / 60 / 24);
    var hours = Math.floor(delta / 60 / 60 % 24);
    var minutes = Math.floor(delta / 60 % 60);
    var seconds = Math.floor(delta % 60);


    document.getElementById("zegar").innerHTML = "Aktualna data: " + rok + "/" + miesiac + "/" + dzien + " " + godzina + ":" + minuta + ":" + sekunda; 
    document.getElementById("data_slubu").innerHTML = "Data ślubu: 2020/08/22 15:00:00" 
    document.getElementById("pozostalo_do_slubu").innerHTML = "Pozostało do ślubu: " + days + " dni " + hours + " godzin " + minutes + " minut " + seconds + " sekund "
    setTimeout("odliczanie()", 1000);
}