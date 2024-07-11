export const Home = () => {
  return (
    <div className="w-2/3 m-auto">
      <h2>
        Tools for Heroes of Cerulea - they will unlock as they are
        finished.
      </h2>
      <div className="flex flex-col tablet:flex-row tablet:gap-10 justify-center my-4">
        <span className="text-cerulea-green">◼ - Finished</span>{" "}
        <span className="text-cerulea-gold">◼ - Currently working on</span>
        <span >◼ - Planned</span>
      </div>
      <p className="text-cerulea-green">Character Generator</p>
      <p>Monster Generator - with monster reaction</p>
      <p>Boss Generator</p>
      <p className="text-cerulea-gold">Shop Generator</p>
      <p>Treasure Generator</p>
      <p>Overworld Generator</p>
      <p>Dungeon Generator - with challenges</p>
    </div>
  );
};
