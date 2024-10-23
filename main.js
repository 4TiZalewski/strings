const button = document.querySelector(".function");

if (button) {
    button.addEventListener("click", (event) => {
        event.preventDefault();

        const count = document.querySelector(".target");
        const display = document.querySelector(".display");

        if (count && display) {
            const words_to_count = count.textContent;
            const words_count = words_to_count.trim().split(" ");

            let a_words_count = 0;
            words_count.forEach((element) => {
                if (element.includes("a")) {
                    a_words_count++;
                }
            });

            display.textContent = `Podany tekst ma ${words_count.length} słów, a ${a_words_count} ma w sobie literę "a"`;
        }
    });
}