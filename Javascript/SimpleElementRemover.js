
    const Elements = [".elementClass","#elementId","input[value='example']"];

    Elements.forEach((elements) => {
      document.querySelectorAll(elements).forEach((me) => {
          deleteIfExist(me);
      });
    });

    const deleteIfExist = (element) => {
        waitForElementToExist(element).then(() => {
            element.remove();
        });
    };

    function waitForElementToExist(element) {
        return new Promise((resolve) => {
            if (element) {
                return resolve(element);
            }

            const observer = new MutationObserver(() => {
                if (document.contains(element)) {
                    resolve(element);
                }
            });

            observer.observe(document.body, {
                subtree: true,
                childList: true,
            });
        });
    }
