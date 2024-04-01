import Link from "next/link";
import Image from "next/image";

const Logo = () => {
    return (
        <Link href="/">
            <Image src="/logo2.svg" width={80} height={80} priority />
        </Link>
    )
}

export default Logo
