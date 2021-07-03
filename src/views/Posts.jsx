import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
import Card from "../components/Card/Card"
import { getPosts } from "../state/posts/thunks"
import Loader from "react-loader-spinner";


export default ()=>{
    const dispatch = useDispatch();
    const posts = useSelector(state=> state.posts)
    const [isLoading, setIsLoading] = useState(true)
    useEffect(()=>{
        dispatch(getPosts()).then(()=>setIsLoading(false))
      }, [dispatch])
    
    
      return(
          <>
          {
              isLoading ? 
              <Loader
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={3000} //3 secs
            /> 
            : 
              <div style={{display:"flex", flexDirection:"column", alignItems: "center"}}>
                {posts?.map((post)=> <Card key={post.id} post={post}/>)}    
              </div>
          }
          </>
      )
}

