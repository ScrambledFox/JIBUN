"use client";

import { motion } from "framer-motion";

const staggeredCards = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      staggerChildren: 0.25,
      duration: 0.2,
    },
  },
};

const show = {
  hidden: {
    y: 50,
  },
  visible: {
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const Card = ({
  title,
  icon,
  text,
  className,
}: {
  title: string;
  icon: React.JSX.Element;
  text: string;
  className?: string;
}) => {
  return (
    <div
      className={`${className} relative w-full rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:border-light dark:bg-dark`}
    >
      <div className="flex flex-row items-center justify-center gap-2">
        {icon}
        <p className="text-2xl font-semibold">{title}</p>
      </div>

      <p className="font-medium mt-4 mx-auto">{text}</p>

      <div className="absolute top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light" />
    </div>
  );
};

const AnimatedCard = ({
  index,
  title,
  icon,
  text,
  delay,
  className,
}: {
  index?: number;
  title: string;
  icon: React.JSX.Element;
  text: string;
  delay?: number;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ y: 50 }}
      key={index}
      viewport={{ once: true }}
      variants={show}
    >
      <Card title={title} icon={icon} text={text} className={className} />
    </motion.div>
  );
};

const AnimatedCards = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      className={`${className}`}
      variants={staggeredCards}
      initial="hidden"
      whileInView="visible"
    >
      {children}
    </motion.div>
  );
};

export { Card, AnimatedCard, AnimatedCards };
