import {FaBehance, FaInstagram, FaLinkedinIn, } from "react-icons/fa"
import {FiTwitter} from "react-icons/fi"

export const Behance_icon =({size,color,onClick,className })=>{
    return  <FaBehance  size={size} color={color} className={className} onClick={onClick} />
}
export const Instagram_icon =({size,color,onClick,className})=>{
    return  <FaInstagram  size={size} color={color} className={className} onClick={onClick} />
}
export const Twitter_icon =({size,color,onClick,className})=>{
    return  <FiTwitter  size={size} color={color} className={className} onClick={onClick} />
}
export const LinkedIn_icon =({size,color,onClick,className})=>{
    return  <FaLinkedinIn  size={size} color={color} className={className} onClick={onClick} />
}
