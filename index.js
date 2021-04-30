function displayVideo(input) {
    document.getElementById('video').setAttribute('src', window.URL.createObjectURL(input.files[Object.keys(input.files)[0]]))
}
function showFileChooser(){
        document.getElementById('myfile').click();
}setTimeout(() => {
    var shares = document.getElementsByClassName('sharebtn');
    for (var element of shares) {
        element.addEventListener('click', () => {

        showFileChooser();
    })

    }
}, 500);
function fullscreen(){
    document.getElementsByTagName('html')[0].requestFullscreen();
}