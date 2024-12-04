


document.addEventListener("DOMContentLoaded", () => {

    const input = document.querySelector('input');

    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const target_content = event.target.value.trim();
            console.log("Entered content:", target_content);
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
