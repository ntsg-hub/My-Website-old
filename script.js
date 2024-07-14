function animateTitle(Title = "Hello, World!", delay = 300) {
let counter = 0;
    let direction = true;
    
    let aniTitle = setInterval(function () {
        if (counter === Title.length) {
            direction = false;
        }
        if (counter === 0) {
            direction = true;
        }
        
        if (direction) {
            counter++;
        } else {
            // Asegúrate de que counter no llegue a 0 para mantener al menos una letra en el título
            if (counter > 1) {
                counter--;
            }
        }
        
        let newTitle = (counter === 0) ? " " : Title.slice(0, counter);
        document.title = newTitle; }, delay);
}
/* I didn't do it. Thanks to Thomas Weichhart for the help! 🐱  https://stackoverflow.com/a/68499694 */
