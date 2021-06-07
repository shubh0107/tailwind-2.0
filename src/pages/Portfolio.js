import React from 'react'
import { motion, AnimatePresence } from "framer-motion";

import PageTitle from '../components/PageTitle'


import Smile1 from '../images/smile1.jpeg';
import Smile2 from '../images/smile2.jpeg';
import Dazed1 from '../images/dazed1.jpeg';





const IMAGES = {
  smile1: Smile1,
  smile2: Smile2,
  dazed1: Dazed1,
};

const PAGES = [
  {
    id: 0,
    title: 'Smile',
    image: Smile1
  },
  {
    id: 1,
    title: 'Dazed and Confused',
    image: Dazed1
  },
  {
    id: 2,
    title: 'Food',
    image: Smile2
  }
]

export default function Portfolio() {
  const [hoveredPage, setHoveredPage] = React.useState(PAGES[0]);

  return (
    <div className="h-screen">
      <div className="relative h-screen w-screen flex pages-container">
        {/* <div className="w-full h-full"> */}
        {/* <img src={hoveredPage.image} alt={hoveredPage.title} className="w-full h-full object-cover" /> */}
        <BackgroundImage page={hoveredPage} />
        {/* </div> */}
        <div className="fixed w-min flex overflow-auto">
          {PAGES.map(page =>
            <PageTitle key={page.id} setHoveredPage={() => setHoveredPage(page)}>
              {page.title}
            </PageTitle>)
          }
        </div>

        {/* <section className="h-full w-full flex flex-shrink-0">
          <PageTitle>Page One</PageTitle>
        </section>
        <section className="h-full w-screen flex flex-shrink-0">
          <PageTitle>Page Two</PageTitle>
        </section>
        <section className="h-full w-screen flex flex-shrink-0">
          <PageTitle>Page Three</PageTitle>
        </section> */}
      </div>
    </div>
  )
}

const variants = {
  enter: (direction) => {
    return {
      // x: direction > 0 ? 1000 : -1000,
      opacity: 1,

    };
  },
  center: {
    // zIndex: 1,
    // x: 0,
    opacity: 1
  },
  exit: (direction) => {
    return {
      // zIndex: 0,
      // x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

const BackgroundImage = ({ page }) => {
  const { id, image, title } = page;
  return <AnimatePresence initial>
    <motion.img
      key={id}
      src={image}
      alt={title}
      className="absolute w-full h-full object-cover"
      // custom={direction}
      // variants={variants}
      // initial="enter"
      // animate="center"
      // exit="exit"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        //   // x: { type: "spring", stiffness: 300, damping: 30 },
        //   opacity: { duration: 0.2 }
        duration: 0.4
      }}
    />
  </AnimatePresence>
}