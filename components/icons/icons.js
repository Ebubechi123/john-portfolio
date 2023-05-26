import { FaBehance, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import{IoIosClose} from "react-icons/io"
import { FiTwitter } from "react-icons/fi";
import { BsArrowRightShort } from "react-icons/bs";
import { AiFillCaretDown } from "react-icons/ai";
import { HiMenuAlt2 } from "react-icons/hi";
export const Behance_icon = ({ size, color, onClick, className }) => {
  return (
    <FaBehance
      size={size}
      color={color}
      className={className}
      onClick={onClick}
    />
  );
};
export const Instagram_icon = ({ size, color, onClick, className }) => {
  return (
    <FaInstagram
      size={size}
      color={color}
      className={className}
      onClick={onClick}
    />
  );
};
export const Twitter_icon = ({ size, color, onClick, className }) => {
  return (
    <FiTwitter
      size={size}
      color={color}
      className={className}
      onClick={onClick}
    />
  );
};
export const LinkedIn_icon = ({ size, color, onClick, className }) => {
  return (
    <FaLinkedinIn
      size={size}
      color={color}
      className={className}
      onClick={onClick}
    />
  );
};
export const ArrorRigth_Icon = ({ size, color, onClick, className }) => {
  return (
    <BsArrowRightShort
      size={size}
      color={color}
      className={className}
      onClick={onClick}
    />
  );
};
export const Down_Icon = ({ size, color, onClick, className }) => {
  return (
    <AiFillCaretDown
      size={size}
      color={color}
      className={className}
      onClick={onClick}
    />
  );
};
export const Menu_Icon = ({ size, color, onClick, className }) => {
  return (
    <HiMenuAlt2
      size={size}
      color={color}
      className={className}
      onClick={onClick}
    />
  );
};

export const Close_Icon = ({ size, color, onClick, className }) => {
    return (
      <IoIosClose
        size={size}
        color={color}
        className={className}
        onClick={onClick}
      />
    );
  };
