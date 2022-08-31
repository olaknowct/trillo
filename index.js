let modalElement = document.querySelector(".modal-notification");
let bookmarkModal = document.querySelector(".modal-notification .bookmark");
let messagesModal = document.querySelector(".modal-notification .messages");
let navIcons = document.querySelectorAll(".user-nav__icon-box");

navIcons.forEach((navIcon) => {
  navIcon.addEventListener("mouseenter", (e) => {
    modalElement.classList.add("active");
    const hasBookmark = e.target.classList.contains("bookmark");
    const hasMessages = e.target.classList.contains("messages");
    if (hasBookmark) bookmarkModal.classList.add("active");
    if (hasMessages) messagesModal.classList.add("active");
  });

  navIcon.addEventListener("mouseleave", (e) => {
    modalElement.classList.remove("active");
    const hasBookmark = e.target.classList.contains("bookmark");
    const hasMessages = e.target.classList.contains("messages");

    if (hasBookmark) bookmarkModal.classList.remove("active");
    if (hasMessages) messagesModal.classList.remove("active");
  });
});
