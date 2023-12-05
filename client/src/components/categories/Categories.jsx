const Categories = () => {
  return (
    <ul className="flex gap-4 flex-col text-lg">
      <li
        className="bg-primary px-6 py-10 text-white cursor-pointer 
      hover:bg-secondary transition-all text-center"
      >
        <span>Tümü</span>
      </li>
      <li
        className="bg-secondary px-6 py-10 text-white cursor-pointer 
      hover:bg-primary transition-all text-center"
      >
        <span>Yiyecek</span>
      </li>
      <li
        className="bg-secondary px-6 py-10 text-white cursor-pointer 
      hover:bg-primary transition-all text-center"
      >
        <span>İçecek</span>
      </li>
      <li
        className="bg-secondary px-6 py-10 text-white cursor-pointer 
      hover:bg-primary transition-all text-center"
      >
        <span>Meyve</span>
      </li>
      <li
        className="bg-secondary px-6 py-10 text-white cursor-pointer 
      hover:bg-primary transition-all text-center"
      >
        <span>Sebze</span>
      </li>
      <li
        className="bg-secondary px-6 py-10 text-white cursor-pointer 
      hover:bg-primary transition-all text-center"
      >
        <span>Kıyafet</span>
      </li>
      <li
        className="bg-secondary px-6 py-10 text-white cursor-pointer 
      hover:bg-primary transition-all text-center"
      >
        <span>+</span>
      </li>
      <li
        className="bg-secondary px-6 py-10 text-white cursor-pointer 
      hover:bg-primary transition-all text-center"
      >
        <span>Düzenle</span>
      </li>
    </ul>
  );
};

export default Categories;
