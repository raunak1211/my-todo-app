import styles from "./Items.module.css"
import { MdDelete } from "react-icons/md";

function Items({todoname,tododate,onDeleteClick}) {
  return (
    <div className="container">
      <div className={`${styles.newRow} row` }>
        <div className="col-6" >{todoname}</div>
        <div className="col-4" >{tododate}</div>
        <div className="col-2">
          <button type="button" onClick={()=>onDeleteClick(todoname)} className={`${styles.newButton} btn btn-outline-danger`}>
            <MdDelete/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Items;
