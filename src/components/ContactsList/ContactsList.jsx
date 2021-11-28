import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, deleteContact } from 'redux/contactsOperations';
import styles from './ContactsList.module.css';
import { getContacts } from 'redux/contactsSelectors';
import { ContactsListItem } from './partials/ContactsListItem/ContactsListItem';

export function ContactsList() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  const onDeleteContact = id => dispatch(deleteContact(id));

  return (
    <ul className={styles.contacts}>
      {contacts.map(({ id, name, phone }) => {
        return (
          <li key={id} className={styles.contactsItem}>
            <ContactsListItem
              name={name}
              number={phone}
              onDelete={() => onDeleteContact(id)}
            />
          </li>
        );
      })}
    </ul>
  );
}
