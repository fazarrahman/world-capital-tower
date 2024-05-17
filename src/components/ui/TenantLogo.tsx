'use client'
import Image from "next/image"
import { motion } from "framer-motion";

const TenantLogo = ({ tenants }: any) => {
    return (
        <div className="my-10 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12">
            {tenants.map((n: any, i: any) =>
                <motion.div className="max-w-lg border-none"
                    initial={{ opacity: 0 }}
                    whileInView={{
                        opacity: 1,
                        transition: {
                            duration: 3.99,
                            delay: i / 10
                        },
                    }}
                    viewport={{ once: true }}
                    key={i}
                >
                    <Image
                        priority
                        src={n.ImageUrl}
                        alt={n.ImageAlt}
                        width={150}
                        height={150}
                        className="w-full"
                    />
                </motion.div>
            )}
        </div>
    );
}

export default TenantLogo;