import { Link } from "react-router-dom";

export default function Navigation() {
  function handleClickToLoc(loc: string | undefined) {
    loc === "top"
      ? window.scrollTo({ top: 0, behavior: "smooth" })
      : loc === "bottom"
      ? window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
      : null;
  }

  return (
    <nav className="fixed bottom-10 z-10 w-full uppercase text-lg">
      <div className="mx-auto bg-neutral-700 w-max rounded-3xl bg-opacity-80">
        <ul className="flex justify-evenly gap-2 p-4">
          <li>
            <Link to="/" className="bg-neutral-800 py-1.5 px-4 rounded-full">
              Home
            </Link>
          </li>
          <li>
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                handleClickToLoc("top");
              }}
              className="bg-neutral-800 py-1.5 px-4 rounded-full"
            >
              Top
            </a>
          </li>
          <li>
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                handleClickToLoc("bottom");
              }}
              className="bg-neutral-800 py-1.5 px-4 rounded-full"
            >
              Bottom
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
