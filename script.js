function animateTitle(Title = "Hello, World!", delay = 300) {
    let counter = 0;
    let direction = true;
    aniTitle = setInterval(function () {
        if (counter === Title.length) {
            direction = false;
        }
        if (counter === 0) {
            direction = true;
        }
    
        counter = direction ? counter + 1 : counter - 1;
        let newtitle = (counter == 0) ? " " : Title.slice(0, counter);
        document.title = newtitle;
    }, delay)
}

/* I didn't do it. Thanks to Thomas Weichhart for the help! 🐱  https://stackoverflow.com/a/68499694 */
