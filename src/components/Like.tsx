import { useState } from 'react';
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'

interface Props{
    onClick:()=>void;
}

const Like=(prop:Props)=>{
    const [status, setStatus]=useState(false);

    const toggle=()=>{
        setStatus(!status);
        prop.onClick();
    }

    if(status) 
    {   
        return (
            <div>
                {/* <AiFillHeart color="ff6b81" size={20} onClick={()=>{setStatus(false)}}/> */}
                <AiFillHeart color="ff6b81" size={20} onClick={toggle}/>
            </div>
        );
    }

    return (
        <div>
            {/* <AiOutlineHeart size={20} onClick={()=>{setStatus(true)}} /> */}
            <AiOutlineHeart size={20} onClick={toggle} />
        </div>
    );

}

export default Like;