import { useDispatch } from 'react-redux';
import css from './Contact.module.css';

import { deleteContact } from '../../redux/contactsSlice';

import { FcBusinessman } from "react-icons/fc";
import { FcPhone } from "react-icons/fc";

export default function Contact({ data: { id, name, number } }) {
    const dispatch = useDispatch();

    return (
        <>
            <div className={css.container}>
            <p className={css.info}>Contact info</p>
            <p className={css.name}>
               <FcBusinessman/> {name}
            </p>
            <p>
                <FcPhone/>{number}
            </p>
            <button className={css.button} onClick={() => dispatch(deleteContact(id))}>
                Delete
            </button>
            </div>
        </>
        
    );

}