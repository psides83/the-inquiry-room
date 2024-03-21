"use client";

import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";

import { _tags, _mock, _categories, _coursePosts } from "src/_mock";

import PostSidebar from "../../blog/common/post-sidebar";
import ElearningNewsletter from "../elearning-newsletter";
import Podcast from "../../blog/podcast/podcast";
import PostSearchMobile from "../../blog/common/post-search-mobile";
import FeaturedEpisode from "../../blog/podcast/featured-episode";
import usePodcast from "src/hooks/use-podcast";
import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";
import PodcastServers from "./podcast-servers-view";

// ----------------------------------------------------------------------

export default function PodcstEpisodesView() {
  const [podcastData, podcastEpisodes, podcastServers] = usePodcast();
  const [searchTerm, setSearchTerm] = useState();

  return (
    <>
      {/* <PostSearchMobile /> */}

      <FeaturedEpisode episode={podcastEpisodes[0]} />

      <Container
        sx={{
          pt: 10,
        }}
      >
        <Grid container spacing={{ md: 8 }}>
          <Grid xs={12} md={8}>
            <PodcastServers podcastServers={podcastServers} />
          </Grid>

          <Grid xs={12} md={8}>
            <Podcast episodes={podcastEpisodes} />
          </Grid>

          <Grid xs={12} md={4}>
            <PostSidebar
              popularTags={_tags}
              // categories={_categories}
              recentPosts={{ list: _coursePosts.slice(-4) }}
              advertisement={{
                title: "Advertisement",
                description:
                  "Duis leo. Donec orci lectus, aliquam ut, faucibus non",
                imageUrl: _mock.image.course(10),
                path: "",
              }}
            />
          </Grid>
        </Grid>
      </Container>
      {/* <ElearningNewsletter /> */}
    </>
  );
}
