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
import { useEffect, useState } from "react";
import Player from "src/components/player";
import { Button, Collapse } from "@mui/material";

// ----------------------------------------------------------------------

export default function FeaturedEpisode({ episode }) {
  const [showingDescription, setShowingDescription] = useState(false);

  const handleCollapse = () => {
    if (showingDescription) setShowingDescription(false);
    else setShowingDescription(true);
  };

  return (
    <Box
      sx={{
        bgcolor: "background.neutral",
        pt: { xs: 12, md: 14 },
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
            sx={{ height: 380, width: 380, borderRadius: 2 }}
          />

          <Stack
            spacing={1}
            sx={{
              mx: "auto",
              pl: { md: 8 },
              py: { xs: 3, md: 5 },
              maxWidth: { xs: 300, md: 408 },
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

            <Collapse
              in={showingDescription}
              collapsedSize={160}
              // sx={{ mt: -3 }}
            >
              {/* <Stack alignItems="center"> */}
              <Box
                variant="body2"
                // persistent
                color="text.secondary"
                // sx={{ mt: -3 }}
                dangerouslySetInnerHTML={{ __html: episode?.description }}
              />
              {/* </Stack> */}
            </Collapse>

            <Button
              onClick={handleCollapse}
              // variant="outlined"
              size="small"
              // sx={{ mt: 2, justifySelf: "center" }}
            >
              {showingDescription ? "Show less" : "Show more"}
            </Button>
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
