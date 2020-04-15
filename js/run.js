(() => {
    const canvas = document.getElementById("canvas");

    function onClick(e) {
        const x = e.clientX - canvas.offsetLeft;
        const y = e.clientY - canvas.offsetTop;

        console.log('x: ', x , 'y: ', y);

        drowRect(x, y, 10, 10);
    }

    function drowRect(x, y, width, height) {
        const context = canvas.getContext('2d');

        context.fillStyle = '#0f0';
        context.fillRect(x, y, width, height);
    }

    canvas.addEventListener('click', onClick);
})();