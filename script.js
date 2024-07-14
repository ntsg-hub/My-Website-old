function animateTitle(Title = "Hello, World!", delay = 300) {
    let counter = 0;
    let direction = true;
    aniTitle = setInterval(function () {
        if (counter === Title.length || counter === 0) {
            direction = -direction; // Cambia la dirección al llegar al principio o al final
        }
        
        counter += direction;
        let newTitle = (counter === 0) ? " " : Title.slice(0, counter);
        document.title = newTitle;
    }, delay);
}

/* I didn't do it. Thanks to Thomas Weichhart for the help! 🐱  https://stackoverflow.com/a/68499694 */
