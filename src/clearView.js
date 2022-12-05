//Clear content div between view changes

function clearView() {
    console.log("Testing clearView");
    const content = document.querySelector('#content');
    while (content.firstChild) {
        content.removeChild(content.lastChild);
      }
};

export { clearView };