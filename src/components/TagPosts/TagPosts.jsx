import Card from "../../views/Card/Card"
import {useSelector, useDispatch} from "react-redux"
import {getTagPosts} from "../../state/posts/thunks"
import {useEffect, useState} from "react"
import Loader from "react-loader-spinner";
 


export default ({match})=>{
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(true)
    

    useEffect(()=>{
        dispatch(getTagPosts(match.params.tag)).then(()=>setIsLoading(false))
    }, [dispatch])
   
    const posts = useSelector(state=> state.posts)



    if(isLoading)return <Loader
    type="Puff"
    color="#00BFFF"
    height={100}
    width={100}
    timeout={3000} //3 secs
  />
      return(   
         
              <div style={{display:"flex", flexDirection:"column", alignItems: "center"}}>
                {posts?.map((post)=> <Card key={post.id} post={post}/>)}    
              </div>
          
      )
}
