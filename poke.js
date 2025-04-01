/** Auto-poke script for Facebook (English Version) Responsive - only reacts when poked */

function poke() { console.log("Checking for pokes...");

let pokeLinks = Array.from(document.getElementsByTagName("span"))
    .filter(el => el.innerHTML.includes("Poke Back"));

if (pokeLinks.length > 0) {
    pokeLinks.forEach(link => {
        link.click();
        console.log(`Poked back: ${link.innerHTML}`);
    });
}

setTimeout(poke, 500); // Check every 500ms for faster response

}

console.log("Starting improved auto-poke script..."); poke();
