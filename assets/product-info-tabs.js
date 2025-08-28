// CUSTOM CODE FOR IMPLEMENTING TABS LAYOUT ON PRODUCT PAGE
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-tabs]").forEach((tabs) => {
    const tabButtons = tabs.querySelectorAll("[role='tab']");
    const tabPanels = tabs.querySelectorAll("[role='tabpanel']");

    tabButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const targetId = button.getAttribute("aria-controls");

        // Reset buttons
        tabButtons.forEach((btn) => {
          btn.classList.remove("is-active");
          btn.setAttribute("aria-selected", "false");
        });

        // Reset panels
        tabPanels.forEach((panel) => {
          panel.hidden = true;
          panel.classList.remove("is-active");
        });

        // Activate clicked button
        button.classList.add("is-active");
        button.setAttribute("aria-selected", "true");

        // Show target panel
        const targetPanel = tabs.querySelector(`#${targetId}`);
        if (targetPanel) {
          targetPanel.hidden = false;
          targetPanel.classList.add("is-active");
        }
      });
    });
  });
});
