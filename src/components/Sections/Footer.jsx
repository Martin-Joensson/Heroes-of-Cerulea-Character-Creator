import elf from "/images/Elf.png";
export const Footer = () => {
  return (
    <div className="relative tablet:absolute tablet:bottom-0 bg-cerulea-blue text-text-light w-full">
      <p className="">Fan created character creator for Heroes of Cerulea</p>
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
