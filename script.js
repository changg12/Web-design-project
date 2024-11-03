document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector('input');

    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const target_content = event.target.value.trim();
            
            console.log(target_content);

            






        }
    });
});