"use client"
import React from 'react';
import { motion } from "framer-motion";


const TextAppearDelay = ({ text, tag, className }: string) => {
    if (tag == "h1") {
        const txt = text.split(" ");
        return (
            <div>
                {txt.map((el, i) => (
                    <motion.h1 className={className}
                        initial={{ opacity: 0 }}
                        whileInView={{
                            opacity: 1,
                            transition: {
                                duration: 1.99,
                                delay: i / 10
                            },
                        }}
                        viewport={{ once: true }}
                        key={i}
                    >
                        {el}{" "}
                    </motion.h1>
                ))}
            </div>
        );
    } else if (tag == "p") {
        const txt = text.split(" ");
        return (
            <p className={className}>
                {txt.map((el, i) => (
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{
                            opacity: 1,
                            transition: {
                                duration: 1.99,
                                delay: i / 10
                            },
                        }}
                        viewport={{ once: true }}
                        key={i}
                    >
                        {el}{" "}
                    </motion.span>
                ))}
            </p>
        );
    } else {
        const txt = text.split(" ");
        return (
            <div>
                {txt.map((el, i) => (
                    <motion.span className={className}
                        initial={{ opacity: 0 }}
                        whileInView={{
                            opacity: 1,
                            transition: {
                                duration: 1.99,
                                delay: i / 10
                            },
                        }}
                        viewport={{ once: true }}
                        key={i}
                    >
                        {el}{" "}
                    </motion.span>
                ))}
            </div>
        );
    }
}

export default TextAppearDelay;