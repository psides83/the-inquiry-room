"use client";

import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Pagination, { paginationClasses } from "@mui/material/Pagination";

import PostItem from "./podcast-episode-item";
import { useState } from "react";

// ----------------------------------------------------------------------

export default function Podcast({ episodes }) {
  return (
    <>
      <Box
        sx={{
          columnGap: 4,
          display: "grid",
          rowGap: { xs: 4, md: 5 },
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
          },
        }}
      >
        {episodes.slice(0, 8).map((episode) => (
          <PostItem key={episode.pubDate} episode={episode} />
        ))}
      </Box>

      <Pagination
        count={10}
        color="primary"
        sx={{
          py: { xs: 8, md: 10 },
          [`& .${paginationClasses.ul}`]: {
            justifyContent: "center",
          },
        }}
      />
    </>
  );
}

Podcast.propTypes = {
  posts: PropTypes.array,
};
