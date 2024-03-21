"use client";

import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Pagination, { paginationClasses } from "@mui/material/Pagination";

import PostItem from "./podcast-episode-item";
import { useState } from "react";
import { Button, Stack } from "@mui/material";

// ----------------------------------------------------------------------

export default function Podcast({ episodes }) {
  const [visibleEpisodes, setVisibleEpisodes] = useState(4);

  function handleShowMore() {
    setVisibleEpisodes((prevVisibleEpisodes) => prevVisibleEpisodes + 10);
  }

  return (
    <Stack alignItems="center" sx={{ mb: 4 }}>
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
        {episodes.slice(0, visibleEpisodes).map((episode) => (
          <PostItem key={episode.pubDate} episode={episode} />
        ))}
      </Box>

      {visibleEpisodes < episodes.length && (
        <Button variant="contained" sx={{ mt: 4 }} onClick={handleShowMore}>
          Show More
        </Button>
      )}

      {/* <Pagination
        count={10}
        color="primary"
        sx={{
          py: { xs: 8, md: 10 },
          [`& .${paginationClasses.ul}`]: {
            justifyContent: "center",
          },
        }}
      /> */}
    </Stack>
  );
}

Podcast.propTypes = {
  posts: PropTypes.array,
};
