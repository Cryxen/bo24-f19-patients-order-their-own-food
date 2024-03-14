import Link from "next/link";
import '../styles/globals.scss'

const Navbox = ({redirect, text}: {redirect: string, text: string}) => {
    return(
        <Link href={{ pathname: redirect }}><button className="navButton">{text}</button></Link>
    );
};

export default Navbox;