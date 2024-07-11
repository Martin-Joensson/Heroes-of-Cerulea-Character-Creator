import elf from "/images/Elf.png";
export const Footer = () => {
  return (
    <div className="absolute bottom-0 h-20 bg-cerulea-blue text-text-light w-full">
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
      <img
        src={elf}
        alt="elf"
        className="w-10 h-10 absolute bottom-0 right-2 no-print"
      />
    </div>
  );
};
