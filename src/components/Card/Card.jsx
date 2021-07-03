import axios from "axios";
import {useEffect, useState} from "react"
import BASE_URL from "../../utils/APIConfig"
import CommentsModal from "../CommentsModal/CommentsModal";
import OwnerModal from "../OwnerModal/OwnerModal";
import s from "./Card.module.css"
import {getTagPosts} from "../../state/posts/thunks"
import {useHistory} from "react-router-dom"
import {useDispatch} from "react-redux"

export default ({post})=>{
    const dispatch = useDispatch();
    const [postComments, setPostComments] = useState([])
    const [ownerVisible, setOwnerVisible] = useState(false)
    const [commentsVisible, setCommentsVisible] = useState(false)
    const history = useHistory()

    const fetchTagPosts = (tag)=>{
        dispatch(getTagPosts(tag)).then(()=>{
            history.push(`/posts/${tag}`)
        })
    }

    useEffect(()=>{
        axios.get(`${BASE_URL}/post/${post.id}/comment`, { headers: { 'app-id': '60e09fb8ab6a422af6657b9c' } })
            .then((res)=>setPostComments(res.data)
            )
            .catch((err)=>console.log(err))
    }, [])
   
    
    return (
      
      
       <div className={s.container}>
         { 
       ownerVisible ? 
       <OwnerModal ownerVisible={ownerVisible} owner={post.owner} setOwnerVisible={setOwnerVisible}/>
       :
       commentsVisible ?
       <CommentsModal commentsVisible={commentsVisible} comments={postComments} setCommentsVisible={setCommentsVisible}/>
       :
       <>
          
            <div className={s.owner} onClick={()=>setOwnerVisible(true)}>{`${post.owner.firstName} ${post.owner.lastName}`}</div>
            <div className={s.text}>{post.text}</div>
            <img className={s.image} style={{maxWidth: "300px"}} src={post.image}/>
            <div className={s.likesAndComments}>{post.likes} likes</div>
            <div className={s.likesAndComments}onClick={()=>setCommentsVisible(true)}>{postComments.total} comments</div>

            {post.link ? <div className={s.text}>{post.link}</div> : null}
            <div className={s.text}>Published: {post.publishDate}</div>
            {post.tags.length > 0 && post.tags.map((tag)=> <div onClick={()=> fetchTagPosts(tag)}className={s.tags} key={tag}>#{tag}</div>)}
            

</>

            


         }
        </div>
    
        
      
    )
}