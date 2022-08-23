// mobile
const icon_menu = document.getElementById("icon_menu");
const icon_close = document.getElementById("icon_close");
const header_liste = document.getElementById("header_liste");
const onbre = document.getElementById("onbre");


const next_left = document.getElementById("next_left");
const previous_left = document.getElementById("previous_left");

// desktop
const entete = document.getElementById("entete");
const thumbnail_img = document.querySelectorAll("#thumbnail_img");
const tab = [1, 2, 3, 4];

let thumbnail_img_modal = document.querySelectorAll("#thumbnail_img_modal");
const modale_entete = document.getElementById("modale_entete");
 
const next=document.getElementById("next");
const previous = document.getElementById("previous");


const modale_close = document.getElementById("modale_close");
const modale = document.getElementById("modale");


const plus = document.getElementById("plus");
const zero = document.getElementById("zero");
const moin = document.getElementById("moin");
const add = document.getElementById("add");
const compte = document.getElementById("compte");
const multi = document.getElementById("multi");
const black = document.getElementById("black");
const suprime = document.getElementById("suprime");
const libele = document.getElementById("libele");
const Checkout = document.getElementById("Checkout");
const vide = document.getElementById("vide");


// console.log(previous_left);

function focus_change_with_fleche(ajout) {
    thumbnail_img_modal[0].classList.remove("focus_thumbnail");
    thumbnail_img_modal[1].classList.remove("focus_thumbnail");
    thumbnail_img_modal[2].classList.remove("focus_thumbnail");
    thumbnail_img_modal[3].classList.remove("focus_thumbnail");
    
    ajout.classList.add("focus_thumbnail");
}

if (screen.width>375) {
    

//change focus normal
function focus_img(ajout, remove_1, remove_2, remove_3) {
    ajout.classList.add("focus_thumbnail");
    remove_1.classList.remove("focus_thumbnail");
    remove_2.classList.remove("focus_thumbnail");
    remove_3.classList.remove("focus_thumbnail");
    
}


thumbnail_img[0].addEventListener("click", () => {
    focus_img(thumbnail_img[0], thumbnail_img[1], thumbnail_img[2], thumbnail_img[3])
});

thumbnail_img[1].addEventListener("click", () => {
    focus_img(thumbnail_img[1], thumbnail_img[0], thumbnail_img[2], thumbnail_img[3])

});

thumbnail_img[2].addEventListener("click", () => {
focus_img(thumbnail_img[2],thumbnail_img[1],thumbnail_img[0],thumbnail_img[3])

})
thumbnail_img[3].addEventListener("click", () => {
focus_img(thumbnail_img[3], thumbnail_img[1], thumbnail_img[2], thumbnail_img[0])

})

async function change_img_normal() {
    for (const k in thumbnail_img) {
    
        thumbnail_img[k].addEventListener("click", () => {
            entete.setAttribute("src", `images/image-product-${tab[k]}.jpg`)
        });

    };
};

 change_img_normal();


// focus modal

thumbnail_img_modal[0].addEventListener("click", () => {
    focus_img(thumbnail_img_modal[0], thumbnail_img_modal[1], thumbnail_img_modal[2], thumbnail_img_modal[3])
});

thumbnail_img_modal[1].addEventListener("click", () => {
    focus_img(thumbnail_img_modal[1], thumbnail_img_modal[0], thumbnail_img_modal[2], thumbnail_img_modal[3])

});

thumbnail_img_modal[2].addEventListener("click", () => {
    focus_img(thumbnail_img_modal[2], thumbnail_img_modal[1], thumbnail_img_modal[0], thumbnail_img_modal[3])

});
thumbnail_img_modal[3].addEventListener("click", () => {
    focus_img(thumbnail_img_modal[3], thumbnail_img_modal[1], thumbnail_img_modal[2], thumbnail_img_modal[0])

});



async function change_img_modal() {
    for (const k in thumbnail_img_modal) {
    
        thumbnail_img_modal[k].addEventListener("click", () => {
            modale_entete.setAttribute("src", `images/image-product-${tab[k]}.jpg`)
        });

    };
};
change_img_modal();










// change the img with fleche
next.addEventListener("click", () => {
 
for (const key in thumbnail_img_modal) {
        
        if ((thumbnail_img_modal[key].classList.contains("focus_thumbnail") === true) && key<3) {
       
            
            modale_entete.setAttribute("src", `images/image-product-${tab[parseInt(key) + 1]}.jpg`);

            focus_change_with_fleche(thumbnail_img_modal[parseInt(key)+1])
            return
            
           }

        if (thumbnail_img_modal[key].classList.contains("focus_thumbnail")==true && key==3) {
            
            modale_entete.setAttribute("src", `images/image-product-${tab[0]}.jpg`);

            focus_change_with_fleche(thumbnail_img_modal[0])
        }
    }
    
 


    
});

previous.addEventListener("click", () => {
 
for (const key in thumbnail_img_modal) {
        
        if ((thumbnail_img_modal[key].classList.contains("focus_thumbnail") === true) && key>0) {
       
            
            focus_change_with_fleche(thumbnail_img_modal[parseInt(key) - 1]);
            modale_entete.setAttribute("src", `images/image-product-${tab[parseInt(key) - 1]}.jpg`);

            return
            
           }

        if (thumbnail_img_modal[key].classList.contains("focus_thumbnail")==true && key==0) {
            
            focus_change_with_fleche(thumbnail_img_modal[3]);
            modale_entete.setAttribute("src", `images/image-product-${tab[3]}.jpg`);
    break
        }
    }
    
 


    
});


// close modale for pc 
modale_close.addEventListener("click", () => {
    entete.src= modale_entete.src ;
    onbre.style.display = "none";
    modale.style.display = "none";


    for (const key in thumbnail_img_modal) {
        if (thumbnail_img_modal[key].classList.contains("focus_thumbnail") === true) {
            
            thumbnail_img[0].classList.remove("focus_thumbnail");
            thumbnail_img[1].classList.remove("focus_thumbnail");
            thumbnail_img[2].classList.remove("focus_thumbnail");
            thumbnail_img[3].classList.remove("focus_thumbnail");



            thumbnail_img[key].classList.add("focus_thumbnail");

           
     

        }
    }
})



// open modale for pc 


entete.addEventListener("click", () => {

    modale_entete.src = entete.src;
    onbre.style.display = "block";
    modale.style.display = "flex";

    for (const key in thumbnail_img) {
        if (thumbnail_img[key].classList.contains("focus_thumbnail")===true) {
            
            thumbnail_img_modal[0].classList.remove("focus_thumbnail");
            thumbnail_img_modal[1].classList.remove("focus_thumbnail");
            thumbnail_img_modal[2].classList.remove("focus_thumbnail");
            thumbnail_img_modal[3].classList.remove("focus_thumbnail");



            thumbnail_img_modal[key].classList.add("focus_thumbnail");

           
     

        }    
        
    }





    
})




//code pour check
let temp = 0;
plus.addEventListener("click", () => {
    temp++
    if (temp>=0) {
        zero.innerHTML = temp;
    }
})

moin.addEventListener("click", () => {
    temp--

    if (temp>=0) {
        zero.innerHTML = temp;
        
    }

})

add.addEventListener("click", () => {
    vide.style.display = "none";
    libele.style.display = "flex";
    Checkout.style.display = "flex";
    let qauntite = parseInt(zero.textContent);
    let prix = 125.00;
    let total = qauntite * prix;
    total = total.toFixed(2);
if (qauntite>0) {
    multi.innerHTML = qauntite;
    black.innerHTML = `$${total}`;
}
 if (qauntite<=0) {
    window.alert("quantity must be greater than zero")
}   
    if (qauntite>0) {
        compte.innerHTML = qauntite;
        compte.style.display = "block";
    }

})


suprime.addEventListener("click", () => {
    libele.style.display = "none"; 
    Checkout.style.display = "none";
    vide.style.display = "flex";
    compte.style.display = "none";
    zero.innerHTML = 0;
    temp = 0;

    
})



}




















// js for mobile
 
if (screen.width <= 375) {
    
//  code pour le menu deroula du mobile
icon_menu.addEventListener("click", () => {
    
    header_liste.style.transform = "translateX(0%)";
    onbre.style.display = "block";
})

icon_close.addEventListener("click", () => {
   
    header_liste.style.transform = "translateX(-100%)";
    onbre.style.display = "none";
})


    
// change the img with fleche
    
next_left.addEventListener("click", () => {
for (const key in thumbnail_img_modal) {
        
        if ((thumbnail_img_modal[key].classList.contains("focus_thumbnail") === true) && key<3) {
       
            
            entete.setAttribute("src", `images/image-product-${tab[parseInt(key) + 1]}.jpg`);

            focus_change_with_fleche(thumbnail_img_modal[parseInt(key)+1])
            return
            
           }

        if (thumbnail_img_modal[key].classList.contains("focus_thumbnail")==true && key==3) {
            
            entete.setAttribute("src", `images/image-product-${tab[0]}.jpg`);

            focus_change_with_fleche(thumbnail_img_modal[0])
        }
    }
     

});
 
previous_left.addEventListener("click", () => {
    
       for (const key in thumbnail_img_modal) {
        
        if ((thumbnail_img_modal[key].classList.contains("focus_thumbnail") === true) && key>0) {
       
            
            focus_change_with_fleche(thumbnail_img_modal[parseInt(key) - 1]);
            entete.setAttribute("src", `images/image-product-${tab[parseInt(key) - 1]}.jpg`);

            return
            
           }

        if (thumbnail_img_modal[key].classList.contains("focus_thumbnail")==true && key==0) {
            
            focus_change_with_fleche(thumbnail_img_modal[3]);
            entete.setAttribute("src", `images/image-product-${tab[3]}.jpg`);
    break
        }
    } 
    

    
    })
    
 


    














    


// code pour check
let temp = 0
plus.addEventListener("click", () => {
    temp++
    if (temp>=0) {
        zero.innerHTML = temp;
    }
})

moin.addEventListener("click", () => {
    temp--

    if (temp>=0) {
        zero.innerHTML = temp;
        
    }

})

add.addEventListener("click", () => {
    vide.style.display = "none";
    libele.style.display = "flex";
    Checkout.style.display = "flex";
    let qauntite = parseInt(zero.textContent);
    let prix = 125.00;
    let total = qauntite * prix;
    total = total.toFixed(2);
if (qauntite>0) {
    multi.innerHTML = qauntite;
    black.innerHTML = `$${total}`;
}
 if (qauntite<=0) {
    window.alert("quantity must be greater than zero")
}   
    if (qauntite>0) {
        compte.innerHTML = qauntite;
        compte.style.display = "block";
    }

})


suprime.addEventListener("click", () => {
    libele.style.display = "none"; 
    Checkout.style.display = "none";
    vide.style.display = "flex";
    compte.style.display = "none";
    zero.innerHTML = 0;
    temp = 0;

    
})
    
} 







