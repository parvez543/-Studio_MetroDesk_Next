import chair from "../../new4k/chair.png"
import shoes from "../../new4k/shoe.png"
import tshirt from "../../new4k/t_shirt.png"
import watch from "../../new4k/watch.png"
import bag from "../../new4k/bag.png"
import girl from "../../new4k/girl.png"
import jewellery from "../../new4k/jewellery.png"
import glass from "../../new4k/glass.png"
import women from "../../new4k/women.png"
import Image from "next/image"
import styles from "../../styles/styles.module.css"


const HomeComponent = () => {
    return (
        <div>
              <div className='homeImageContainer'>
                  <div className={styles.gridContainer}>
                     {/* Image 1 */}
                     <div className={styles.homeImageContainer}>
                        <div className={styles.imagContentContainer}> <Image  src={watch} alt="This is Watch"/></div>
                        <div className=''> <Image src={bag} alt="This is Bag" /></div>
                     </div>
                     <div className="mt-[32px]">
                        <div className={styles.homeImageContainer}>
                            <div className={styles.imagContentContainer}> <Image  src={chair} alt="This is Chair"/></div>
                            <div className=''> <Image src={shoes} alt="This is Shoes" /></div>
                        </div>
                     </div>
                     <div className="mt-[56px]">
                        <div className={styles.homeImageContainer}>
                            <div className={styles.imagContentContainer}> <Image  src={tshirt} alt="This is Chair"/></div>
                            <div className=''> <Image src={watch} alt="This is Shoes" /></div>
                        </div>
                     </div>
                     <div className="mt-[80px]">
                        <div className={styles.homeImageContainer}>
                            <div className={styles.imagContentContainer}> <Image  src={girl} alt="This is Chair"/></div>
                            <div className=''><Image src={women} alt="This is Shoes" /></div>
                        </div>
                     </div>
                     <div className="mt-[56px]">
                        <div className={styles.homeImageContainer}>
                            <div className={styles.imagContentContainer}> <Image  src={glass} alt="This is Chair"/></div>
                            <div className=''> <Image src={jewellery} alt="This is Shoes" /></div>
                        </div>
                     </div>
                     <div className="mt-[32px]">
                        <div className={styles.homeImageContainer}>
                            <div className={styles.imagContentContainer}> <Image  src={watch} alt="This is Chair"/></div>
                            <div className=''> <Image src={bag} alt="This is Shoes" /></div>
                        </div>
                     </div>
                     <div>
                        <div className={styles.homeImageContainer}>
                            <div className={styles.imagContentContainer}> <Image  src={glass} alt="This is Chair"/></div>
                            <div className=''> <Image src={jewellery} alt="This is Shoes" /></div>
                        </div>
                     </div>
                  </div>
               </div>
        </div>
    );
};

export default HomeComponent;