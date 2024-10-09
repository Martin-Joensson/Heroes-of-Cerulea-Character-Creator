import elf from "/images/sword.png";
import license from "/images/license.png";

import git from "/images/github-mark.svg";
import portfolio from "/images/briefcase-solid.svg";

export const Footer = () => {
  return (
    <div className="absolute bottom-0 bg-cerulea-blue text-text-light w-full">
      <p className="">
        Fan created digital tools for{" "}
        <a
          className="font-enterCommandBold hover:opacity-50 active:opacity-25"
          href="https://blackfiskforlag.com/produkter/heroes-of-cerulea/"
        >
          Heroes of Cerulea
        </a>
      </p>
      <p>
        {" "}
        Heroes of Cerulea is a creation of{" "}
        <a
          className="font-enterCommandBold hover:opacity-50 active:opacity-25"
          href="https://blackfiskforlag.com"
        >
          Bläckfisk Publishing
        </a>
      </p>
      <p>&copy; 2024</p>
      <div className="flex gap-2 justify-center my-4">
        <a href="https://github.com/Martin-Joensson/Heroes-of-Cerulea-Character-Creator">
          <img src={git} className="w-4 h-4 m-auto" />
        </a>
        <a href="https://martin-joensson-portfolio.netlify.app/">
          <img src={portfolio} className="w-4 h-4 m-auto" />
        </a>
      </div>
      <img
        src={elf}
        alt="elf"
        className="w-10 h-10 absolute bottom-0 right-2 no-print"
      />
      <div className="bg-white">


      <img
        src={license}
        alt="license"
        className="h-10 bottom-0 p-1 m-auto bg-white no-print"
        />
        </div>
    </div>
  );
};
