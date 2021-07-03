import s from "./OwnerModal.module.css";
import Modal from 'react-modal';
import {useEffect} from "react"
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../state/users/thunks";

export default ({owner, ownerVisible, setOwnerVisible})=>{
    const dispatch = useDispatch()
    const user = useSelector(state=> state.user)

    useEffect(()=>{
        dispatch(getUser(owner.id)).then((data)=> console.log(data))
    }, [dispatch])
    return(
        <Modal
        isOpen={ownerVisible}
        contentLabel="Example Modal"
        ariaHideApp={false}
        style={{
            content: {
                position: 'absolute',
                top: '40px',
                left: '80px',
                right: '80px',
                bottom: '40px',
                border: '1px solid #ccc',
                background: '#fff',
                overflow: 'auto',
                WebkitOverflowScrolling: 'touch',
                borderRadius: '4px',
                outline: 'none',
                padding: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'space-around',
              }
            }
        }
      >
          <div className={s.container}>
        <img src={user?.picture}/>
        <h2 className={s.title}>{user?.firstName} {user?.lastName}</h2>
        <div className={s.text}>{user?.email}</div>
        <div className={s.text}>Gender: {user?.gender}</div>
        <div className={s.text}>Date of Birth: {user?.dateOfBirth}</div>
        <div className={s.text}>Register Date: {user?.registerDate}</div>
        <div className={s.text}>Phone: {user?.phone}</div>
        <div className={s.text}>Country: {user?.location?.country}</div>
        <button className={s.button} onClick={()=>setOwnerVisible(false)}>close</button>
        </div>
      </Modal>
    )
}