const Elements = [".elementClass","#elementId","input[value='example']"];

    Elements.forEach((ads) => {
        document.querySelectorAll(ads).forEach((me) => {
            waitAndDelete(me)
        });
    });


    function waitAndDelete(element) {
        return new Promise((resolve) => {
            if (element) {
                element.remove()
            }

            const observer = new MutationObserver(() => {
                if (document.contains(element)) {
                    element.remove()
                }
            });

            observer.observe(document.body, {
                subtree: true,
                childList: true,
            });
        });
    }
