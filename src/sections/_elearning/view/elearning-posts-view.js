"use client";

import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";

import { _tags, _mock, _categories, _coursePosts } from "src/_mock";

import PostSidebar from "../../blog/common/post-sidebar";
import ElearningNewsletter from "../elearning-newsletter";
import ElearningPosts from "../../blog/elearning/elearning-posts";
import PostSearchMobile from "../../blog/common/post-search-mobile";
import ElearningFeaturedPost from "../../blog/elearning/elearning-featured-post";
import usePodcast from "src/hooks/use-podcast";
import { Typography } from "@mui/material";

// ----------------------------------------------------------------------

export default function ElearningPostsView() {
  const [podcastData, podcastEpisodes, podcastServers] = usePodcast();

  return (
    <>
      <PostSearchMobile />

      <ElearningFeaturedPost episode={podcastEpisodes[0]} />

      <Container
        sx={{
          pt: 10,
        }}
      >
        <Grid container spacing={{ md: 8 }}>
          <Grid xs={12} md={8}>
            <Typography>{podcastEpisodes[0]?.title}</Typography>
            {podcastEpisodes.map((episode) => (
              <Typography>{episode.title}</Typography>
            ))}
            <ElearningPosts episodes={podcastEpisodes} />
          </Grid>

          <Grid xs={12} md={4}>
            <PostSidebar
              popularTags={_tags}
              categories={_categories}
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
