document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector('input');
    const targetWords = ["Democracy", "Store", "Freedom", "Availability", "Zone", "Weapon"];
    const elements = document.querySelectorAll('*'); // Search through all elements

    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const targetContent = event.target.value.trim().toLowerCase();
            let matchFound = false;

            elements.forEach(element => {
                const elementText = element.textContent.toLowerCase();
                targetWords.forEach(word => {
                    if (elementText.includes(word.toLowerCase()) && targetContent === word.toLowerCase()) {
                        matchFound = true;
                        element.scrollIntoView({ behavior: "smooth", block: "center" });
                    }
                });
            });

            if (matchFound) {
                console.log("Match found and scrolled to.");
            } else {
                console.log("No match found.");
            }
        }
    });
});
