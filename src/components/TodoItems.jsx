import Items from "./Items";

const TodoItems = ({ todoItems,onDeleteClick }) => {
  return (
    <>
      <div className="Items-Container">
        {todoItems.map(item => <Items key={item.name} todoname={item.name} tododate={item.date} onDeleteClick={onDeleteClick}></Items>)}
      </div>
    </>
  );
};

export default TodoItems;
