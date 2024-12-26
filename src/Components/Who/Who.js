import { motion } from 'framer-motion';

// Framer Motion Variants
const variants = {
  initial: { opacity: 0, x: "-100vw" },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: "100vw" }
}

function Who() {
  return (
    // Motion Div
    <motion.div
      className="wp_who"
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h1>This the the "Who I Am" page.</h1>
    </motion.div>
  )
}

export default Who
