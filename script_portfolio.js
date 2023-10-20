let noContent = document.getElementById("noContent");
let sport = document.getElementById("sport");
let anime = document.getElementById("anime");
let sportBtn = document.getElementById("sportBtn");
let animeBtn = document.getElementById("animeBtn");
let home = document.getElementById("home");

animeBtn.onclick = function(){
    noContent.style.display = "none";
    anime.style.display = "block";
    sport.style.display = "none";
}
sportBtn.onclick = function(){
    noContent.style.display = "none";
    anime.style.display = "none";
    sport.style.display = "block";
}
home.onclick = function(){
    noContent.style.display = "block";
    anime.style.display = "none";
    sport.style.display = "none";
}
