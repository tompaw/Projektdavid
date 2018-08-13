//HEJ
var product;
var wallType;
var width;
var height;
var amount;
var wall;

var products = [];
var wallTypes = [];
var widths = [];
var heights = [];
var amounts = [];
var walls = [];

var productName = [];
var productQuantity = [];
createMatList();


function showDropdown(i) {
    if(i == 1){
        document.getElementById("myDropdown").classList.toggle("show");
    }
    else
        document.getElementById("myDropdown2").classList.toggle("show");
}


function produktF(i)
{
    var e = document.getElementById("Produkt");

    if(i == 1){
    e.innerText = "PF 1090";
    product = "PF 1090";
    }
    else if(i == 2) {
        e.innerText = "PV 1090";
        product = "PV 1090";
    }
    else if(i == 3) {
        e.innerText = "PF 1290";
        product = "PF 1290";
    }
    else if(i == 4) {
        e.innerText = "PV 1290";
        product = "PV 1290";
    }
    else if(i == 5) {
        e.innerText = "PF 1290 (Med osb)";
        product = "PF 1290 (Med osb)";
    }
    else {
        e.innerText = "PV 1290 (Med osb)";
        product = "PV1290 (Med osb)";
    }
   
    
    
}

function wallF(i)
{
    var e = document.getElementById("Wall");
    if(i == 1){
        e.innerText = "Vägg till vägg";
        wallType = "Vägg till vägg";
        }
        else if(i == 2) {
            e.innerText = "Vägg till dörr";
            wallType = "Vägg till dörr";
        }
        else if(i == 3) {
            e.innerText = "Dörr till dörr";
            wallType = "Dörr till dörr";
        }
        else if(i == 4) {
            e.innerText = "Ovanstycke dörr/GP";
            wallType = "Ovanstycke dörr/GP";
        }
}
 function save(){

    width = document.getElementById("wid").value;
    height = document.getElementById("hei").value;
    amount = document.getElementById("amount").value;
    produkt = document.getElementById("Produkt").innerText = "Produkt";
    wall = document.getElementById("Wall").innerText = "Väggtyp";

    var list = document.getElementById('test');

     //wallType = document.getElementById('Wall').value;
     //product = document.getElementById('Produkt').value;
    // width   = document.getElementById('wid').value;
     //height   = document.getElementById('hei').value;
    
    var entry = document.createElement('li');
    entry.appendChild(document.createTextNode(product+', '+wallType+', Bredd: '+width+'m, Höjd: '+height+'m, Antal: '+amount+'  '));
    
    var btn = document.createElement("Button");
    btn.innerHTML = 'Ta bort';
    entry.appendChild(btn);
    btn.addEventListener("click", function (e) {
        this.parentNode.parentNode.removeChild(this.parentNode);
    });

    list.appendChild(entry);

    widths.push(width);
    heights.push(height);
    amounts.push(amount);
    products.push(product);
    walls.push(wallType);
    pf1090();
 }

 function pf1090()
 {


     for(i = 0;i < products.length;i++){
        if(products[i].charAt(1) === "F"){ // PROFILFRI VÄGG
            if(walls[i] === "Vägg till vägg"){
                productQuantity[1] += Math.round((2*widths[i])/0.9+0.49)*amounts[i]; //vitgips PF
                productQuantity[3] += Math.round((2*widths[i]+2*heights[i])/3+0.49)*amounts[i]; // Stålskena SG-2
                productQuantity[4] += Math.round((widths[i]/0.9)-0.49)*amounts[i];// SZ-2
                productQuantity[7] += Math.round((4*widths[i]+2*heights[i])/3+0.49)*amounts[i];// AVT-1 0500
                productQuantity[9] +=2*amounts[i];
                productQuantity[10] +=2*amounts[i];
                productQuantity[13] += Math.round(heights[i]/1.2)*Math.round((widths[i]/0.9)-0.49)*amounts[i];
            }
        }
     }
     //for(i=0; i<productName.lesngth;i++){s
     //   document.writeln(productName[i],":: ", productQuantity[i],"  ",("<br>"));
     //}asdf

 }
 function createMatList(){
   productName= ["GLB D 700","GPF D 700","13MM GYPSUMBOARD","SG-2 WITH JOINT STRIP","SZ-2","SD-2","C67",
                "AVT-1 NCS 0500","ASP WHITE","ASPV WHITE","ASPD NCS 0500","50 MM MINERAL WOOL","PF-CLIPS","SGV-2"];
   for(i=0; i<productName.length;i++){
        productQuantity.push(0);
        //document.write("[",i,"]",":",productName[i]);
           /*
        [0]:GLB D 700 
        [1]:GPF D 700
        [2]:13MM GYPSUMBOARD
        [3]:SG-2 WITH JOINT STRIP
        [4]:SZ-2
        [5]:SD-2
        [6]:C67
        [7]:AVT-1 NCS 0500
        [8]:ASP WHITE hprofil u.klack
        [9]:ASPV WHITE hprofil m.klack
        [10]:ASPD NCS 0500
        [11]:50 MM MINERAL WOOL
        [12]:PF-CLIPS
        [13]:SGV-2
        */
   }

 }