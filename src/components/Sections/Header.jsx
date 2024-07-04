import elf from "/images/Elf.png";
export const Header = () => {
  return (
    <div className="relative flex top-0 left-0 bg-cerulea-gold text-black w-full">
      <h1 className="text-xl p-2">Heroes of Cerulea - Character Creator</h1>
      <img
        src={elf}
        alt="elf"
        className="w-10 h-10 absolute bottom-0 right-2 no-print"
      />
    </div>
  );
};
