import s from "./CommentsModal.module.css";
import Modal from 'react-modal';



export default ({comments, commentsVisible, setCommentsVisible})=>{
    return(
        <Modal
        isOpen={commentsVisible}
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
        {
        comments?.data?.length > 0 ?
        
        comments.data.map((comment)=>{
            return(
                <div className={s.comment}>
                <h2 className={s.title }key={comment.id}>{comment.owner.firstName} {comment.owner.lastName}</h2>
                <div className={s.text }>{comment.message}</div>
                <div className={s.date }>{comment.publishDate}</div>
                
                </div>
            )
        })
        :
        <div className={s.text }>No comments</div>
    }
    <button className={s.button }onClick={()=>setCommentsVisible(false)}>Close</button>
    </div>
      </Modal>
    )
}