var header = document.getElementsByClassName("header white-header")[0]
var dummy_header = document.getElementsByClassName("dummy-header")[0]
var watch = document.getElementsByClassName("watch-area")[0]

function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

function sodaPop1 () {
    console.info("sodaPop ---------------")
}

waitForElm("#exportAlternativeTriggerButton").then(() => {
    console.info("ELEMEME E IS AVAILABLE")

    var button = document.getElementsByClassName("a-box-inner")[0]

    let htm = `
        <span class="a-button-inner">
            <input id="buyFromShypmaxButton" type="button" class="a-button-input" aria-labelledby="exportAlternativeTriggerButton-announce">
            <span  class="a-button-text" aria-hidden="true">
                Buy with Shypmax
            </span>
        </span>`

    console.info(button)
    button.innerHTML = button.innerHTML + htm

    document.getElementById("buyFromShypmaxButton").addEventListener('click', (ev) => {
        window.open("https://shyplite.com/buy?link=" + window.location.href + "_blank");
    })


})

console.log("SJHKAJSKAJSKAJSKAJSKJKJASKJSAK")
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

