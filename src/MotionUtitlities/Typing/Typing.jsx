import React from 'react'
import { motion } from 'framer-motion'

function Typing({text,splitDelimitter,once}) {
    const textArr = text.split(`${splitDelimitter}`)
  return (
    <>
    {textArr.map((el,i)=>(
        <motion.span
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1,delay:i/10}}
        viewport={once?{once:true}:{once:false}}
        key={i}
        >
            {el}{" "}
        </motion.span>
    ))}
    </>
  )
}

export default Typing