import s from "./Header.module.css"
import {useHistory} from "react-router-dom"

export default  ()=>{
    const history = useHistory()
    const goHome = () =>{
        history.push("/posts")
    }

return(
    <>
    <div className={s.container}>
        <div onClick={()=> goHome()}className={s.text}>MyPet</div>
        <div className={s.text}>Welcome Lilab!</div>
    </div>

    </>
)



}