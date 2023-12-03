function main() {
    setupNavigation();
    setupBookmark();
}

function toggleOverlay() {
    const overlay = document.querySelector(".overlay");
    const ariaExpandedValue = overlay.getAttribute("aria-expanded");

    overlay.setAttribute("aria-expanded", ariaExpandedValue === "true" ? "false" : "true");
}

function setupNavigation() {
    const navigation = document.querySelector(".navigation__list");
    const navigationButton = document.querySelector(".navigation__button");

    navigationButton.addEventListener("click", () => {
        const ariaExpandedValue = navigation.getAttribute("aria-expanded");
        navigation.setAttribute("aria-expanded", ariaExpandedValue === "true" ? "false" : "true");
        toggleOverlay();
    });
}

function setupBookmark() {
    const bookmarkButton = document.querySelector(".button--bookmark");

    bookmarkButton.addEventListener("click", () => {
        const ariaPressedValue = bookmarkButton.getAttribute("aria-pressed");
        bookmarkButton.setAttribute("aria-pressed", ariaPressedValue === "true" ? "false" : "true");
    });
}

main();