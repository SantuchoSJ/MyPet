import axios from "axios";
import {useEffect, useState} from "react"
import BASE_URL from "../../utils/APIConfig"
import CommentsModal from "../../components/CommentsModal/CommentsModal";
import OwnerModal from "../../components/OwnerModal/OwnerModal";
import s from "./Card.module.css"
import {getTagPosts} from "../../state/posts/thunks"
import {useHistory} from "react-router-dom"
import {useDispatch} from "react-redux"
import Loader from "react-loader-spinner";

export default ({post})=>{
    const dispatch = useDispatch();
    const [postComments, setPostComments] = useState([])
    const [ownerVisible, setOwnerVisible] = useState(false)
    const [commentsVisible, setCommentsVisible] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory()

    const fetchTagPosts = (tag)=>{
        setIsLoading(true)
        dispatch(getTagPosts(tag)).then(()=>{
            setIsLoading(false)
            history.push(`/posts/${tag}`)
        })
    }

    useEffect(()=>{
        axios.get(`${BASE_URL}/post/${post.id}/comment`, { headers: { 'app-id': '60e0a89bcd0cf914675ef8ab' } })
            .then((res)=>setPostComments(res.data)
            )
            .catch((err)=>console.log(err))
    }, [])
   
    if(isLoading)return <Loader
    type="Puff"
    color="#00BFFF"
    height={100}
    width={100}
    timeout={3000} //3 secs
  />
    return (
      <>
      
       <div className={s.container}>
         { 
       ownerVisible ? 
       <OwnerModal ownerVisible={ownerVisible} owner={post.owner} setOwnerVisible={setOwnerVisible}/>
       :
       commentsVisible ?
       <CommentsModal commentsVisible={commentsVisible} comments={postComments} setCommentsVisible={setCommentsVisible}/>
       :
       <>
            <img className={s.profile}src={post.owner.picture}/>
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
    
        </>
      
    )
}