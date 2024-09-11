import React, { useState, useEffect } from "react";

const Header: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>("home");

  useEffect(() => {
    // Clear hash from URL on initial load and keep "home" as default active link
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
      const section = window.location.hash.replace("#", "");
      setActiveLink(section);
    } else {
      setActiveLink("home");
    }
  }, []);

  const handleClick = (section: string) => {
    setActiveLink(section);
  };

  return (
    <header className="px-16 w-full max-md:px-5 max-md:max-w-full mt-8">
      <div className="flex flex-wrap gap-16 justify-between max-w-full text-lg text-zinc-800 w-[890px]">
        <img
          loading="lazy"
          src="neobeeLogo.png"
          className="object-contain aspect-[4.05] w-[227px]"
          alt="Neobee logo"
        />
        <nav className="flex flex-wrap gap-12 items-start my-auto">
          <ul className="flex flex-auto gap-14 justify-center items-center self-start h-5 ">
            <li>
              <a
                href="#home"
                className={`relative ${
                  activeLink === "home" ? "text-black " : ""
                }`}
                onClick={() => handleClick("home")}
              >
                Home
                {activeLink === "home" && (
                  <span className="absolute bottom-[-8px] left-0 w-[80%] h-[4px] bg-yellow-400 ml-1 rounded-full" />
                )}
              </a>
            </li>
            <li>
              <a
                href="#products"
                className={`relative ${
                  activeLink === "products" ? "text-black" : ""
                }`}
                onClick={() => handleClick("products")}
              >
                Our Products
                {activeLink === "products" && (
                  <span className="absolute bottom-[-8px] left-0 w-[80%] h-[4px] bg-yellow-400 ml-2 rounded-full" />
                )}
              </a>
            </li>
            <li>
              <a
                href="#blog"
                className={`relative ${
                  activeLink === "blog" ? "text-black" : ""
                }`}
                onClick={() => handleClick("blog")}
              >
                Blog
                {activeLink === "blog" && (
                  <span className="absolute bottom-[-8px] left-0 w-[80%] h-[4px] bg-yellow-400 ml-1 rounded-full" />
                )}
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={`relative ${
                  activeLink === "about" ? "text-black" : ""
                }`}
                onClick={() => handleClick("about")}
              >
                About Us
                {activeLink === "about" && (
                  <span className="absolute bottom-[-8px] left-0 w-[80%] h-[4px] bg-yellow-400 ml-1 rounded-full" />
                )}
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={`relative ${
                  activeLink === "contact" ? "text-black" : ""
                }`}
                onClick={() => handleClick("contact")}
              >
                Contact
                {activeLink === "contact" && (
                  <span className="absolute bottom-[-8px] left-0 w-[80%] h-[4px] bg-yellow-400 ml-1 rounded-full" />
                )}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
