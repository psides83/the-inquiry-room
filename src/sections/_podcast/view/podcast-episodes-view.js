"use client";

import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";

import { _tags, _mock, _categories, _coursePosts } from "src/_mock";

import PostSidebar from "../../blog/common/post-sidebar";
import Podcast from "../../blog/podcast/podcast";
import PodcastSearchMobile from "../../blog/common/podcast-search-mobile";
import FeaturedEpisode from "../../blog/podcast/featured-episode";
import usePodcast from "src/hooks/use-podcast";
import { useState } from "react";
import PodcastServers from "./podcast-servers-view";
import { useResponsive } from "src/hooks/use-responsive";

// ----------------------------------------------------------------------

export default function PodcastEpisodesView() {
  const mdDown = useResponsive("down", "md");
  const [podcastData, podcastEpisodes, podcastServers] = usePodcast();
  const [searchText, setSearchText] = useState("");
  const [searchParam] = useState(["title", "description"]);
  const [sortOrder, setSortOrder] = useState("newest");

  function searchable() {
    return podcastEpisodes
      .sort((a, b) => {
        if (sortOrder === "newest")
          return new Date(b.pubDate) - new Date(a.pubDate);
        return new Date(a.pubDate) - new Date(b.pubDate);
      })
      .filter((item) =>
        searchParam.some(
          (newItem) =>
            item[newItem]
              .toString()
              .toLowerCase()
              .replace(/[^0-9, a-z]/g, "")
              .replace(/\s/g, "")
              .indexOf(searchText.toLowerCase().replace(/\s/g, "")) > -1
        )
      );
  }

  return (
    <>
      <FeaturedEpisode episode={podcastEpisodes[0]} />

      <Container
        sx={{
          pt: 10,
        }}
      >
        <Grid container spacing={{ md: 8 }}>
          {/* {mdDown && (
            <Grid xs={12} md={8}>
              <PodcastServers podcastServers={podcastServers} />
            </Grid>
          )} */}

          <Grid xs={12} md={8}>
            <PodcastSearchMobile
              searchText={searchText}
              setSearchText={setSearchText}
            />
          </Grid>

          <Grid xs={12} md={8}>
            <Podcast episodes={searchable().slice(1)} />
          </Grid>

          <Grid xs={12} md={4}>
            <PostSidebar
              popularTags={_tags}
              podcastServers={podcastServers}
              searchText={searchText}
              setSearchText={setSearchText}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
