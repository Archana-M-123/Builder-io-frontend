import React from "react";

// Footer component
const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col px-20 py-16 mt-28 w-full bg-yellow-100 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-between w-full max-w-[1231px] max-md:max-w-full">
        <FooterAbout />
        <FooterNav />
      </div>
      <FooterBottom />
    </footer>
  );
};

// FooterAbout Component
const FooterAbout: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevents the page from reloading
    alert("Form submitted!"); // You can replace this with any logic you want
  };

  return (
    <div className="flex flex-col items-start font-medium text-stone-950 max-md:max-w-full">
      <img
        loading="lazy"
        src="neobeeLogo.png"
        className="object-contain max-w-full aspect-[4.05] w-[227px]"
        alt="Neobee logo"
      />
      <h2 className="mt-4 text-2xl leading-8 w-[364px]">
        Subscribe to keep up with the latest news
      </h2>
      <form
        onSubmit={handleSubmit} // Attach the handleSubmit function
        className="flex gap-6 self-stretch mt-6 text-base leading-none text-neutral-400 max-md:max-w-full"
      >
        <div className="flex flex-col grow shrink-0 items-start py-8 pr-16 pl-4 bg-white rounded-md basis-0 w-fit max-md:pr-5 ">
          <label htmlFor="email" className="sr-only ">
            Email address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email address"
            className="w-full bg-transparent border-b border-neutral-300 pb-3 focus:outline-none focus:ring-0 "
          />
          <hr className=" border-t-1 border-neutral-400" />
        </div>
        <button
          type="submit"
          className="shrink-0 max-w-full rounded-md aspect-[1.43] w-[130px] bg-yellow-400 flex items-center justify-center"
        >
          <img
            loading="lazy"
            src="arrow3.png"
            alt="Arrow Icon"
            className="w-10 h-6"
          />
        </button>
      </form>
      <p className="mt-6 text-sm leading-5 w-[600px] ">
        By submitting this form, you acknowledge that you have read the terms of
        our Privacy Statement
      </p>
    </div>
  );
};

// FooterNav Component
const FooterNav: React.FC = () => {
  return (
    <nav className="flex flex-col items-start my-auto text-lg text-zinc-800 absolute right-48 mt-20">
      <a href="#home">Home</a>
      <a href="#products" className="mt-2.5">
        Our Products
      </a>
      <a href="#blog" className="mt-2.5">
        Blog
      </a>
      <a href="#about" className="mt-2.5">
        About us
      </a>
      <a href="#contact" className="mt-2.5">
        Contact us
      </a>
    </nav>
  );
};

const FooterBottom: React.FC = () => {
  const handleIconClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="flex flex-wrap gap-5 justify-between self-end mt-6 mr-80 max-w-full text-sm text-stone-950 w-[501px] max-md:mr-2.5">
      <p>Copyright @ Neobee 2024</p>
      <div className="flex flex-row gap-8 object-contain shrink-0 self-start max-w-full aspect-[8.4] w-[177px]">
        <img
          loading="lazy"
          src="f.png"
          className=""
          alt="Facebook"
          onClick={() => handleIconClick("https://www.facebook.com")}
          style={{ cursor: "pointer" }}
        />
        <img
          loading="lazy"
          src="linkedIn.png"
          className=""
          alt="LinkedIn"
          onClick={() => handleIconClick("https://www.linkedin.com")}
          style={{ cursor: "pointer" }}
        />
        <img
          loading="lazy"
          src="twitter.png"
          className=""
          alt="Twitter"
          onClick={() => handleIconClick("https://www.twitter.com")}
          style={{ cursor: "pointer" }}
        />
        <img
          loading="lazy"
          src="insta.png"
          className=""
          alt="Instagram"
          onClick={() => handleIconClick("https://www.instagram.com")}
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
};

export default Footer;
