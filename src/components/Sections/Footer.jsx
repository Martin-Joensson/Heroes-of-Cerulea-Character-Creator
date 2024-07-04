import elf from "../../assets/images/elf.png";
export const Footer = () => {
  return (
    <div className="absolute bottom-0 bg-cerulea-red text-text-light w-full">
      <p className="">
        Fan created character creator for Heroes of Cerulea
      </p>
      <p> Heroes of Cerulea is a creation of Bläckfisk Förlag</p>
      <p>&copy; 2024</p>
      <img
        src={elf}
        alt="elf"
        className="w-10 h-10 absolute bottom-0 right-2 no-print"
      />
    </div>
  );
};
