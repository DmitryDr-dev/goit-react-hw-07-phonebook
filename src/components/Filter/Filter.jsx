import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import styles from './Filter.module.css';
import { getFilter } from 'redux/contactsSelectors';
import { changeFilter } from 'redux/contactsActions';

export function Filter() {
  const filterInputId = uuidv4();
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <div className={styles.filter}>
      <label htmlFor={filterInputId} className={styles.filterLabel}>
        Search
      </label>
      <input
        type="text"
        className={styles.filterInput}
        id={filterInputId}
        value={filterValue}
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
}

// function Filter() {
//   const value = useSelector(getFilter);
//   const dispatch = useDispatch();

//   const filterInputId = uuidv4();

//   return (
//     <div className={styles.filter}>
//       <label htmlFor={filterInputId} className={styles.filterLabel}>
//         Search
//       </label>
//       <input
//         type="text"
//         className={styles.filterInput}
//         id={filterInputId}
//         value={value}
//         onChange={e => dispatch(contactsActions.changeFilter(e.target.value))}
//       />
//     </div>
//   );
// }

// export default Filter;
