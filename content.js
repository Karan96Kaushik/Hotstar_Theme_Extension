var header = document.getElementsByClassName("header white-header")[0]
var dummy_header = document.getElementsByClassName("dummy-header")[0]
var watch = document.getElementsByClassName("watch-area")[0]

header.style.filter = "invert(80%)"
//dummy_header.style.filter = "invert(80%)"
dummy_header.style.backgroundColor = "#333"
watch.style.backgroundColor = "#333"

setTimeout(() => {

    header.style.filter = "invert(80%)"
    //dummy_header.style.filter = "invert(80%)"
    dummy_header.style.backgroundColor = "#333"
    watch.style.backgroundColor = "#333"
    document.getElementsByTagName('video')[0].webkitRequestFullscreen()
}, 2000);
