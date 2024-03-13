export default function Navigation() {
  function handleClickToLoc(loc: string | undefined) {
    loc === "top"
      ? window.scrollTo({ top: 0, behavior: "smooth" })
      : loc === "bottom"
      ? window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
      : null;
  }

  return (
    <nav className="fixed bottom-10 z-10 w-full text-lg text-white">
      <div className="mx-auto bg-neutral-700 w-max rounded-3xl bg-opacity-50">
        <ul className="flex justify-evenly gap-3 p-3">
          <li>
            <button
              onClick={(e) => {
                e.preventDefault();
                handleClickToLoc("top");
              }}
            >
              <span className="material-symbols-outlined bg-neutral-800 p-2 rounded-full ring-2 ring-neutral-500">
                arrow_upward
              </span>
            </button>
          </li>
          <li>
            <button
              onClick={(e) => {
                e.preventDefault();
                handleClickToLoc("bottom");
              }}
              className=""
            >
              <span className="material-symbols-outlined bg-neutral-800 p-2 rounded-full ring-2 ring-neutral-500">
                arrow_downward
              </span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
