import Link from 'next/link'
import Image from 'next/image'
import { getTranslator } from '@/lib'
import styles from './OfferCard.module.scss'
import OfferCardClient from './OfferCardClient'
async function CardOffer({ offer }) {

    const { t } = await getTranslator("offers")

    return (
        <div className='flex flex-col justify-center w-full items-center pt-10 pointer-events-none' data-offer={offer}>
            <Link className={styles.neonButton} href={'/contact'}>Hire Service</Link>
            <div className={`${styles.cardWrap} `}>
                <OfferCardClient className={styles.card}>
                    <span className={styles.cardBg}  >
                        <Image src={`/Images/Offers/${offer}bg.webp`} width="520" height="774" alt="offer 1" className={styles.offerbg} ></Image>
                    </span>
                    <div >
                        <Image src={`/Images/Offers/${offer}fg.webp`} width="520" height="774" alt="offer 1" className={styles.offerfg}></Image>
                    </div>
                    <div className={`${styles.cardInfo}  `}>
                        <h1 >{t(offer)}</h1>
                        <div >{t(`${offer}-Text`)}</div>
                    </div>
                    <div
                        className={styles.cardBorder}
                    ></div>
                </OfferCardClient>
            </div>
        </div>
    )
}

export default CardOffer;

/*



ref={styles.card">
        <div 
        
        style={{backgroundImage:`url(${image})`,backgroundSize:'cover'}}
        ref={cardRef}>
        <h1 slot="header">{text}</h1>
        <p slot="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>

      */
