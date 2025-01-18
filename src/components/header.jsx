function Header() {
  return (
    <nav className="h-10 border-b border-muted justify-left divide-x divide-muted [&>a]:py-1 [&>a]:px-4 fixed w-full bg-[--bg-color] flex items-center z-10">
      <a href="/" className="flex items-center gap-2 text-sky-400">
        <span>kirre02@swe ~</span>
        <div className="w-[10px] h-[21px] animate-blink bg-sky-400"></div>
      </a>
      <a
        className="hover:text-sky-400"
        href="https://github.com/kirre02"
        target="_blank"
        rel="noreferrer"
      >
        github
      </a>
      <a
        className="hover:text-sky-400"
        href="https://www.linkedin.com/in/erik-svensson-nokrach-13614a216/"
        target="_blank"
        rel="noreferrer"
      >
        linkedin
      </a>
    </nav>
  );
}

export default Header;
