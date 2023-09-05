
function toStringMethod()
{
    let x = 42;
    document.getElementById("example0").innerHTML =
    "toString() on variable:<br> let x = 42; <br>" + "x.toString() = " + x.toString() + "<br>" +
   "toString() on a number: (42).toString() = " + (42).toString() + "<br>" +
   "addition then toString(): (30 + 12).toString() = " + (30 + 12).toString();
}

function toExponential(){
    let x = 1.337;
    document.getElementById("example1").innerHTML =
    "let x = 1.337; <br>"  + 
    "x.toExponential() = " + x.toExponential()  + "<br>"+
    "x.toExponential(2) = " + x.toExponential(2) + "<br>" + 
    "x.toExponential(4) = "  + x.toExponential(4) + "<br>" + 
    "x.toExponential(6) = " + x.toExponential(6);
}

function toFixedMethod(){
    let x = 1.337;
    document.getElementById("example2").innerHTML = 
    "let x = 1.337" + "<br>" +
    "x.toFixed(0) = " + x.toFixed(0) + "<br>" +
    "x.toFixed(2) = " + x.toFixed(2) + "<br>" +
    "x.toFixed(4) = " + x.toFixed(4) + "<br>" +
    "x.toFixed(6) = " + x.toFixed(6);
}

function toPrecisionMethod(){
    let x = 1.337;
    document.getElementById("example3").innerHTML =
    "let x = 1.337;" + "<br>" +
    "x.toPrecision() = " + x.toPrecision() + "<br>" +
    "x.toPrecision(2) = " + x.toPrecision(2) + "<br>" +
    "x.toPrecision(4) = " + x.toPrecision(4) + "<br>" +
    "x.toPrecision(6) = " + x.toPrecision(6); 
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function myClock(){
    var date = new Date();
    var element = document.getElementById('clockText');
    element.textContent = "The Time is: " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}

function myDate(){
    let date = new Date();
    var element = document.getElementById('dateText');
    element.textContent =  "Today's date is: " + date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear(); 
}
function infinityContent(){
    var heading = "<h3>Infinity welcomes careful drivers!</h3>";
    var info = "<a href='https://en.wikipedia.org/wiki/Red_Dwarf:_Infinity_Welcomes_Careful_Drivers'>https://en.wikipedia.org/wiki/Red_Dwarf:_Infinity_Welcomes_Careful_Drivers</a>";
    document.getElementById('heading').innerHTML = heading;
    document.getElementById('info').innerHTML = info;
}

function betterLife(){
    var heading = "<h3>Better Than Life</h3>";
    var info = "<a href='https://en.wikipedia.org/wiki/Better_Than_Life'>https://en.wikipedia.org/wiki/Better_Than_Life</a>";
    document.getElementById('heading').innerHTML = heading;
    document.getElementById('info').innerHTML = info;
    
}
function lastHuman(){
    var heading = "<h3>Last Human</h3>";
    var info = "<a href='https://en.wikipedia.org/wiki/Last_Human'>https://en.wikipedia.org/wiki/Last_Human</a>";
    document.getElementById('heading').innerHTML = heading;
    document.getElementById('info').innerHTML = info;
    
}
function backwards(){
    var heading = "<h3>Backwards</h3>";
    var info = "<a href='https://en.wikipedia.org/wiki/Backwards_(novel)'>https://en.wikipedia.org/wiki/Backwards_(novel)</a>";
    document.getElementById('heading').innerHTML = heading;
    document.getElementById('info').innerHTML = info;
    
}

async function arrayMethods(){
    document.getElementById('arrayStuff').innerHTML = "<h3>Array Method examples.</h3>"
    await sleep(3000);
    document.getElementById('arrayStuff').innerHTML = "<p>We have a basic array</p>"
    await sleep(3000);
    var crew = ['Lister','Rimmer', 'Kryten','Cat'];
    document.getElementById('arrayStuff').innerHTML = "<p>var crew = ['Lister','Rimmer', 'Kryten','Cat'];</p>";
    await sleep(3000);
    document.getElementById('arrayStuff').innerHTML = "<p>The pop() method removes the last element of the array</p>";
    await sleep(3000);
    crew.pop();
    document.getElementById('arrayStuff').innerHTML = "<p>crew.pop()</p>"
    await sleep(3000);
    document.getElementById('arrayStuff').innerHTML = "<p>We now have: "+ "[" +crew + "]" +" in our list</p>"
    await sleep(3000);
    document.getElementById('arrayStuff').innerHTML = "<p>If we want to add an item to the end of the list we use the push() method.</p>"
    await sleep(3000);
    crew.push('Kochanski');
    document.getElementById('arrayStuff').innerHTML = "<p>crew.push('Kochanski')</p>"
    await sleep(3000);
    document.getElementById('arrayStuff').innerHTML = "<p>Our list now looks like this: " +"[" + crew +"]" +" The push() method also retuns the new length of the array.</p>"
    await sleep(3000);
    document.getElementById('arrayStuff').innerHTML = "<p>The shift() method removes the first array element and \"shifts\" all other elements to a lower index.</p>";
    await sleep(3000);
    crew.shift();
    document.getElementById('arrayStuff').innerHTML = "<p>crew.shift()</p>";
    await sleep(3000);
    document.getElementById('arrayStuff').innerHTML = "<p>The list now looks like this: " +"["+ crew + "]" + "</p>"
    await sleep(3000);
    document.getElementById('arrayStuff').innerHTML = "<p>The unshift() method adds a new element to an array (at the beginning), and \"unshifts\" older elements</p>"
    crew.unshift("Cat");
    await sleep(3000);
    document.getElementById('arrayStuff').innerHTML = "<p>crew.unshift('Cat')</p>"
    await sleep(3000);
    document.getElementById('arrayStuff').innerHTML = "<p>The list now looks like this: " + "[" +crew + "]" +"</p>";
    await sleep(3000);
    document.getElementById('arrayStuff').innerHTML ="<p>The concat() method creates a new array by merging (concatenating) existing arrays:<p>";
    await sleep(3000);
    var notRedDwarf = ['Wilma','Betty','Fred','Barney'];
    document.getElementById('arrayStuff').innerHTML = "<p>Lets define a new array (bonus marks if you get the joke): " + "[" + notRedDwarf + "]" + "</p>"
    await sleep(3000);
    var insideJoke = crew.concat(notRedDwarf);
    document.getElementById('arrayStuff').innerHTML = "<p>var insideJoke = crew.concat(notRedDwarf);</p>";
    await sleep(3000);
    document.getElementById('arrayStuff').innerHTML = "<p>Our new array is: " + "[" + insideJoke + "]";

}


function defaultInfo(){
    var heading = "Welcome fellow Dwarfers!";
    var info = "You may be familiar with the Red Dwarf TV series from the BBC. Did you also know a number of books were written as well? On this page you will learn about the books that have been written.";
    var element1 = document.getElementById('heading');
    var element2 = document.getElementById('info');
    element1.textContent = heading;
    element2.textContent = info;
}



async function changeCase(){
    element = document.getElementById('footer_text');
    element.textContent = "Task 1.2P Introduction to responsive web design - Brett Wiggins 222441506".toUpperCase();
    await sleep(1000);
    element.textContent = "Task 1.2P Introduction to responsive web design - Brett Wiggins 222441506".toLowerCase();
    await sleep(1000);
    const date = new Date();

    element.textContent = "Task 1.2P Introduction to responsive web design - Brett Wiggins ".concat("222441506");
    
    
}

async function scrollText(){
    element = document.getElementById('footer_text');
    var myString = "Task 1.2P Introduction to responsive web design - Brett Wiggins 222441506";
    count = 0;
    var newString = '';
    var splitStirng = [];
    element.textContent = "Print one character at a time using charAt(): ";
    await sleep(1000);
    element.textContent = "----Lets GO------->>>>>";
    await sleep(1000);
    element.textContent = "";
    while(count < myString.length){
        newString += myString.charAt(count);
        element.textContent = newString;
        await sleep(100);
        count++;
    }
    splitStirng = newString.split(" ");
    arrayLength = splitStirng.length;
    element.textContent = "Print one word at a time using split(): ";
    await sleep(1000);
    element.textContent = "----Lets GO------->>>>>";
    await sleep(1000);
    element.textContent = "";
    for(var i = 0; i < arrayLength; i++){
        element.textContent += " " + splitStirng[i];
        await sleep(400);
    }
    
}


window.onload = function() {
        scrollText();
        
};


