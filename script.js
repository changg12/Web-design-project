document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector('#input');
    const targetWords = ["Democracy", "Store", "Freedom", "Availability", "Zone", "Weapon"];
    const elements = document.querySelectorAll('*');

    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const targetContent = event.target.value.trim().toLowerCase();
            let matchFound = false;

            elements.forEach((element) => {
                const elementText = element.textContent.toLowerCase();
                targetWords.forEach((word) => {
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

            event.target.value = '';
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
        newParagraph.textContent = `added title: ${title} comment: ${comment}`;
        myDiv.appendChild(newParagraph);

        setTimeout(() => {
            newParagraph.remove();
        }, 3000);

        form.reset();
    };

    document.querySelector('#post-form input[type="button"]').onclick = sendFrom;
});
