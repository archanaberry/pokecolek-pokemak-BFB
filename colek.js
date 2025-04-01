/** Skrip auto-colek untuk Facebook (Versi Indonesia) Responsif - hanya bereaksi saat sudah dicolek */

function colek() { console.log("Memeriksa colekkan...");

let tautanColek = Array.from(document.getElementsByTagName("span"))
    .filter(el => el.innerHTML.includes("Balas Colek"));

if (tautanColek.length > 0) {
    tautanColek.forEach(link => {
        link.click();
        console.log(`Membalas colek: ${link.innerHTML}`);
    });
}

setTimeout(colek, 500); // Periksa setiap 500ms agar lebih responsif

}

console.log("Memulai skrip auto-colek yang ditingkatkan..."); colek();
