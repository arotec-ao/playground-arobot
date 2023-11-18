import Image from 'next/image'
import Styles from './styles.module.css'

export default function HowWorks({ title, srcImage, children }) {
    return (
        <div className={Styles.hw}>
            <div className={Styles.hwTextArea}>
                <div className={Styles.hwTitle}>{title}</div>
                <div className={Styles.hwContent}>{children}</div>
            </div>
            <div className={Styles.hwImageArea}>
                <div className={Styles.hwBlurImage}>
                    <Image src={srcImage} width='320' height='250' alt='' />
                </div>
            </div>
        </div>
    );
}