function animateTitle(Title = "Hello, World!", delay = 300) {
    let counter = 1;
    let direction = true;
    
    let aniTitle = setInterval(function () {
        if (direction) {
            counter++;
            if (counter === Title.length) {
                direction = false;
            }
        } else {
            counter--;
            if (counter === 0) {
                direction = true;
            }
        }
        
        let newTitle = (counter === 0) ? " " : Title.slice(0, counter);
        document.title = newTitle;
        
        if (!direction && counter === 1) { 
            counter = 1;
            direction = true;
        }
    }, delay);
}
/* I didn't do it. Thanks to Thomas Weichhart for the help! 🐱  https://stackoverflow.com/a/68499694 */
