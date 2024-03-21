"use client";

import { useScroll } from "framer-motion";

import ScrollProgress from "src/components/scroll-progress";

import PodcastEpisodesView from "src/sections/_podcast/view/podcast-episodes-view";

// ----------------------------------------------------------------------

export default function HomeView() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <ScrollProgress scrollYProgress={scrollYProgress} />

      <PodcastEpisodesView />
    </>
  );
}
