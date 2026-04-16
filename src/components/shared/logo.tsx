import Icon from '@/public/logo.svg';
import Image from 'next/image';
import Link from 'next/link';

export const Logo = ({ href = '/' }: { href: string }) => {
    return (
        <Link href={href}>
            <Image
                src={Icon}
                priority
                height={30}
                width={120}
                alt="NameCraft.AI logo"
            />
        </Link>
    );
};
