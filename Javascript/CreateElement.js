    // example use
    document.body.appendChild(createEle('div', 'overlay', {
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "rgba(0,0,0,0.2)",
    })
    );

    function createEle(type='div', classes = null, styles = null) {
        const appendStyle = (element, styles) => {
            if(styles){
                Object.assign(element.style, styles);
            }
        }
        let div;
        if (classes) {
            if (Array.isArray(classes)) {
                classes.forEach((element) => {
                    div = document.createElement(type);
                    div.classList.add(element);
                });
                appendStyle(element,styles);
            } else if (!Array.isArray(classes)) {
                div = document.createElement(type);
                div.classList.add(classes);
                appendStyle(div,styles);
            } else {
                div = document.createElement(type);
                appendStyle(div,styles);
            }
        } else {
            div = document.createElement(type);
        }
        return div;
    }
