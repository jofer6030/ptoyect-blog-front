const Categoria = ({ category }) => {
  const { Icon, title } = category;
  return (
    <div className={`category__list__item ${title}`}>
      <h4>{title}</h4>
      {/* {Icon ? <Icon /> : null} */}
      {Icon && <Icon />}
    </div>
  );
};

export default Categoria;
