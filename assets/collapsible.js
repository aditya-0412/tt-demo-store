(() => {
  const items = document.querySelectorAll("[data-accordion-block]");
  if (!items.length) return;

  document.addEventListener(
    "toggle",
    (ev) => {
      if (!(ev.target instanceof HTMLDetailsElement) || !ev.target.open) return;
      if (!ev.target.hasAttribute("data-accordion-block")) return;

      items.forEach((item) => {
        if (item !== ev.target && item.open) item.open = false;
      });
    },
    true
  );
})();
