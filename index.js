const info = {
    "sous-poids" : "#e64a19",
    "normal" : "#4caf50",
    "surpoids" : "#ffd600",
    "obésité" : "#f44336",
    "obésité morbide" :"#b71c1c"
}

window.addEventListener('load', () => {
    console.log(info["sous-poids"])
   let calcul_btn = document.getElementById("calcul");
   calcul_btn.addEventListener('click',() => {
       calcul();
   })
   let calcul_img_btn = document.getElementById("calcul_img");
   calcul_img_btn.addEventListener('click', () => {
       calcul_img();
   })
});

const imc = (poids,taille) => {
    return poids/taille**2;
}

const display = (el,data,color) => {
    let element = document.getElementById(el);
    element.innerText = data;
    element.style.color = color;

}

const calcul = () => {
    let taille = document.getElementById('taille').value;
    let poids = document.getElementById('poids').value;
    let color = "";
    let result = imc(poids,taille)
    if (result < 18.5){
        color = info["sous-poids"]
    }
    if (result < 25 && result > 18.5){
        color = info["normal"]
    }
        if (result < 30 && result > 25){
        color = info["surpoids"]
    }
            if (result < 35 && result > 30){
        color = info["obésité"]
    }
            if (result > 40){
        color = info["obésité morbide"]
    }
    display("display",result.toFixed(1),color)
}

const img = (age,sexe,imc) => {
    return (1.20 * imc) + (0.23 * age) - (10.8 * sexe) -5.4;
}

const calcul_img = () => {
    let age = document.getElementById('age').value;
    let imc = document.getElementById('imc').value;
    var sexe = document.querySelector('.sexe:checked').value;
    let result_img = img(age,sexe,imc)
    display("display_img",result_img.toFixed(1) + "%")
}