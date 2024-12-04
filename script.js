document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector('input');
    const targetWords = ["Democracy", "Store", "Freedom", "Availability", "Zone", "Weapon", "armory", "factions"];
    const elements = Array.from(document.querySelectorAll('*'));

    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const targetContent = event.target.value.trim().toLowerCase();
            console.log(targetContent);
            let matchFound = false;

            targetWords.forEach(word => {
                if (word.toLowerCase() === targetContent) {
                    matchFound = true;
                    elements.forEach(element => {
                        const elementText = element.textContent ? element.textContent.toLowerCase() : '';
                        if (elementText.includes(word.toLowerCase())) {
                            element.scrollIntoView({ behavior: "smooth", block: "center" });
                            console.log(`Scrolled to: ${word}`);
                        }
                    });
                }
            });

            if (!matchFound) {
                console.log("No match found.");
            }
        }
    });

    const sendFrom = (event) => {
        event.preventDefault();
        const form = document.getElementById("post-form");
        const title = form.querySelector('input[name="title"]').value.trim();
        const comment = form.querySelector('input[name="comment"]').value.trim();

        console.log("Title:", title);
        console.log("Comment:", comment);
        const myDiv = document.getElementById("post-status");
        const newParagraph = document.createElement('p');
        newParagraph.textContent = `Added title: ${title}, comment: ${comment}`;
        myDiv.appendChild(newParagraph);

        setTimeout(() => {
            newParagraph.remove();
        }, 3000);

        form.reset();
    };

    document.querySelector('#post-form input[type="button"]').onclick = sendFrom;
});