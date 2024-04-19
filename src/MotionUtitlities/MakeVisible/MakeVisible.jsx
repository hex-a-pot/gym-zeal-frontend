import React from 'react'
import { motion } from 'framer-motion'

function MakeVisible(props) {
  return (
    <motion.span
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:2}}
    >
        {props.children}
    </motion.span>
  )
}

export default MakeVisible