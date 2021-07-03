import Card from "../../views/Card/Card"
import {useSelector} from "react-redux"



export default ()=>{
   
    const posts = useSelector(state=> state.posts)
  
      return(   
         
              <div style={{display:"flex", flexDirection:"column", alignItems: "center"}}>
                {posts?.map((post)=> <Card key={post.id} post={post}/>)}    
              </div>
          
      )
}
