import styles from './Sidebar.module.scss'
import { motion } from 'framer-motion'

const Sidebar = () => {

    const navItems = ['Services', 'Products', 'Contact']

    return <>  
      <motion.div 
        className={styles.container}
        initial={{ opacity: 0, x: 500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
        className={styles.image}
        initial={{ opacity: 0, scale: 0}}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        >

        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50  }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.8 }}  
        >
            {
                navItems.map((item, index) => (
                    <motion.p
                      key={index}
                      initial={{ opacity: 0, x: 60 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1, delay: index * .3 }}
                    >
                        {item}
                    </motion.p>
                ))
            }
        </motion.div>
      </motion.div>
    </>
}

export default Sidebar