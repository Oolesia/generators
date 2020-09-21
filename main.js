const fontSize = document.getElementById('font14');
const fontSizeUp = document.getElementById('font-up');
const fontSizeDown = document.getElementById('font-down');
const content = document.getElementById('main-content');

function* createIdGenerator() {
    let i = 0;
    while (true) {
        i++;
        yield i;
    }
}


const idGenerator = createIdGenerator();
console.log(idGenerator.next());
console.log(idGenerator.next());
console.log(idGenerator.next());



fontSize.addEventListener('click', function () {
    let size = document.getElementById('font-size').value || 14;

    const fontGenerator = newFontGenerator(+size);
    console.log(fontGenerator.next().value);
    fontGenerator.next();

    fontSizeUp.addEventListener('click', function () {
        fontGenerator.next("up");
    });
    fontSizeDown.addEventListener('click', function () {
        fontGenerator.next("down");
    });
});



function* newFontGenerator(size) {
    while (true) {
        var status = yield null;
        if (status == 'up') {
            size += 2;
        } else if (status == 'down') {
            size -= 2;
        }
        content.style.cssText = 'font-size:' + size + 'px !important';
        console.log(size);
    }
}
