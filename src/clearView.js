//Clear content div when switching between list view and form view
function clearView() {
    const content = document.querySelector('main');
    while (content.firstChild) {
        content.removeChild(content.lastChild);
      }
};

export { clearView };