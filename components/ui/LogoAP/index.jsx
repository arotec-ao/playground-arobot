import LogoAPStyle from './index.module.css'
import Image from 'next/image';

export default function LogoAP() {
  return (
    <div className={LogoAPStyle.logoAP}>
      <Image src='/icons/icon.png' width='48' height='48' alt='' /> Playground
    </div>
  );
}