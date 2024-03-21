"use client";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { paths } from "src/routes/paths";
import { RouterLink } from "src/routes/components";

import { fDate } from "src/utils/format-time";

import Image from "src/components/image";

import PostTimeBlock from "../common/post-time-block";
import { useEffect } from "react";
import Player from "src/components/player";

// ----------------------------------------------------------------------

export default function FeaturedEpisode({ episode }) {
  return (
    <Box
      sx={{
        bgcolor: "background.neutral",
        py: { xs: 12, md: 14 },
      }}
    >
      <Container>
        <Typography variant="h3" sx={{ mb: 4 }}>
          Latest Episode
        </Typography>
        <Stack direction={{ xs: "column", md: "row" }}>
          <Image
            src={episode?.coverArt}
            alt={episode?.title}
            sx={{ height: 560, borderRadius: 2 }}
          />

          <Stack
            spacing={1}
            sx={{
              mx: "auto",
              pl: { md: 8 },
              py: { xs: 3, md: 5 },
              maxWidth: { md: 408 },
            }}
          >
            <PostTimeBlock
              createdAt={fDate(episode?.pubDate)}
              duration={episode?.duration}
            />

            <Typography
              // component={RouterLink}
              // href={paths.eLearning.episode}
              color="inherit"
              variant="h3"
            >
              {episode?.title}
            </Typography>

            <Player controls url={episode?.enclosure.url} />

            <Typography
              sx={{ color: "text.secondary", flexGrow: 1 }}
              dangerouslySetInnerHTML={{ __html: episode?.description }}
            />

            <Stack
              direction="row"
              alignItems="center"
              sx={{ pt: 1.5, typography: "body2" }}
            >
              {/* <Avatar src={episode.author.avatarUrl} sx={{ mr: 1 }} /> */}
              {/* {episode.author.name} */}
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

FeaturedEpisode.propTypes = {
  episode: PropTypes.shape({
    title: PropTypes.string,
    coverArt: PropTypes.string,
    duration: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string,
    pubDate: PropTypes.string,
    enclosure: PropTypes.shape({
      url: PropTypes.string,
      type: PropTypes.string,
    }),
  }),
};