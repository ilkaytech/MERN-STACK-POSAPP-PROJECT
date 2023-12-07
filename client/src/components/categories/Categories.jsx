const Categories = () => {
  return (
    <ul className="flex gap-4 md:flex-col text-lg">
      <li
        className="bg-primary px-6 py-10 text-white cursor-pointer 
      hover:bg-secondary transition-all text-center min-w-[145px]"
      >
        <span>Tümü</span>
      </li>
      <li
        className="bg-secondary px-6 py-10 text-white cursor-pointer 
      hover:bg-primary transition-all text-center min-w-[145px]"
      >
        <span>Yiyecek</span>
      </li>
      <li
        className="bg-secondary px-6 py-10 text-white cursor-pointer 
      hover:bg-primary transition-all text-center min-w-[145px]"
      >
        <span>İçecek</span>
      </li>
      <li
        className="bg-secondary px-6 py-10 text-white cursor-pointer 
      hover:bg-primary transition-all text-center min-w-[145px]"
      >
        <span>Meyve</span>
      </li>
      <li
        className="bg-secondary px-6 py-10 text-white cursor-pointer 
      hover:bg-primary transition-all text-center min-w-[145px]"
      >
        <span>Sebze</span>
      </li>
      <li
        className="bg-secondary px-6 py-10 text-white cursor-pointer 
      hover:bg-primary transition-all text-center min-w-[145px]"
      >
        <span>Kıyafet</span>
      </li>
      <li
        className="bg-secondary px-6 py-10 text-white cursor-pointer 
      hover:bg-primary transition-all text-center min-w-[145px]"
      >
        <span>+</span>
      </li>
      <li
        className="bg-secondary px-6 py-10 text-white cursor-pointer 
      hover:bg-primary transition-all text-center min-w-[145px]"
      >
        <span>Düzenle</span>
      </li>
    </ul>
  );
};

export default Categories;
