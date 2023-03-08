const bouton_left_nationaux = document.getElementById("left_nationaux_btn");
const bouton_left_locaux = document.getElementById("left_locaux_btn");

const bouton_right_nationaux = document.getElementById("right_nationaux_btn");
const bouton_right_locaux = document.getElementById("right_locaux_btn");

const section_nationaux = document.getElementById("div_inner_section_nationaux");
const section_locaux = document.getElementById("div_inner_section_locaux");

const doc = document.querySelector(".doc");



let position_section_nationaux = 0;
let position_section_locaux = 0;


bouton_left_nationaux.onclick = function nationaux_left() {

    if (position_section_nationaux==0) {
        return
    };

    var largeur_doc = doc.offsetWidth; 
    var marge_doc = parseInt(window.getComputedStyle(doc).getPropertyValue('margin-left'));
    var taille_doc = largeur_doc + marge_doc;
    position_section_nationaux = position_section_nationaux + taille_doc;
    section_nationaux.style.left = position_section_nationaux.toString()+"px";
};

bouton_right_nationaux.onclick = function nationaux_right() {

    var largeur_doc = doc.offsetWidth; 
    var marge_doc = parseInt(window.getComputedStyle(doc).getPropertyValue('margin-left'));
    var taille_doc = largeur_doc + marge_doc;
    position_section_nationaux = position_section_nationaux - taille_doc;
    section_nationaux.style.left = position_section_nationaux.toString()+"px";
};

bouton_left_locaux.onclick = function locaux_left() {

    if (position_section_locaux==0) {
        return
    };

    var largeur_doc = doc.offsetWidth; 
    var marge_doc = parseInt(window.getComputedStyle(doc).getPropertyValue('margin-left'));
    var taille_doc = largeur_doc + marge_doc;
    position_section_locaux = position_section_locaux + taille_doc;
    section_locaux.style.left = position_section_locaux.toString()+"px";
};

bouton_right_locaux.onclick = function locaux_right() {

    var largeur_doc = doc.offsetWidth; 
    var marge_doc = parseInt(window.getComputedStyle(doc).getPropertyValue('margin-left'));
    var taille_doc = largeur_doc + marge_doc;
    position_section_locaux = position_section_locaux - taille_doc;
    section_locaux.style.left = position_section_locaux.toString()+"px";
};