import { motion } from 'framer-motion'

const MotionTest = () => (
  <div className="flex items-center justify-center h-full p-8">
    <motion.div
      className="w-24 h-24 bg-blue-500 rounded"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
    />
  </div>
)

export default MotionTest
