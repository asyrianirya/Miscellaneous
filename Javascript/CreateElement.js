const backStage = document.body.appendChild(
    createEle("div", "overlay", {
        position: "fixed",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "rgba(0,0,0,0.2)",
        display: 'flex',
        justifyContent: 'center'
    })
);

backStage.appendChild(
    createEle("div", "modal", {
        position: "fixed",
        width: "80vw",
        height: "10vh",
        backgroundColor: "white",
        top: '10px',
        border: '1px solid black',
        borderRadius: '10px'
    })
);

function createEle(type = "div", classes = null, styles = null) {
    const appendStyle = (element, styles) => {
        if (styles) {
            Object.assign(element.style, styles);
        }
    };

    const div = document.createElement(type);
    if (classes) {
        if (Array.isArray(classes)) {
            classes.forEach((element) => {
                div.classList.add(element);
            });
        } else {
            div.classList.add(classes);
        }
    }
    if (styles) {
        appendStyle(div, styles);
    }
    return div;
}
