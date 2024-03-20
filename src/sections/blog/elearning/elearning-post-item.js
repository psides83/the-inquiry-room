import PropTypes from "prop-types";

import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

import { paths } from "src/routes/paths";
import { RouterLink } from "src/routes/components";

import { fDate } from "src/utils/format-time";

import Image from "src/components/image";
import TextMaxLine from "src/components/text-max-line";
import { Box, Button, Collapse } from "@mui/material";
import { useState } from "react";
import Player, { PlayerDialog } from "src/components/player";

// ----------------------------------------------------------------------

export default function ElearningPostItem({ episode }) {
  const [showingDescription, setShowingDescription] = useState(false);

  const handleCollapse = () => {
    if (showingDescription) setShowingDescription(false);
    else setShowingDescription(true);
  };
  return (
    <Paper variant="outlined" sx={{ borderRadius: 2, overflow: "hidden" }}>
      <Image src={episode.coverArt} alt={episode.title} ratio="1/1" />

      <Stack direction="row" spacing={3} sx={{ p: 3 }}>
        <Stack sx={{ textAlign: "center" }}>
          <Typography variant="subtitle2">
            {fDate(episode.pubDate, "MMM")}
          </Typography>

          <Divider sx={{ mt: 1, mb: 0.5 }} />

          <Typography variant="h3">{fDate(episode.pubDate, "dd")}</Typography>
        </Stack>

        <Stack spacing={1}>
          <Typography color="inherit">
            <TextMaxLine variant="h6" persistent>
              {episode.title}
            </TextMaxLine>
          </Typography>

          <Box sx={{ mb: 2 }}>
            <Player controls url={episode?.enclosure.url} />
          </Box>

          {/* <Collapse in={!showingDescription}>
            <Stack alignItems="center">
              <TextMaxLine
                variant="body2"
                // persistent
                color="text.secondary"
                sx={{ mt: -3 }}
                dangerouslySetInnerHTML={{ __html: episode.description }}
              />
              <Button
                onClick={handleCollapse}
                variant="outlined"
                size="small"
                sx={{ mt: 2, justifySelf: "center" }}
              >
                Expand
              </Button>
            </Stack>
          </Collapse> */}

          <Collapse in={showingDescription} collapsedSize={90} sx={{ mt: -3 }}>
            <Stack alignItems="center">
              <Box
                variant="body2"
                // persistent
                color="text.secondary"
                // sx={{ mt: -3 }}
                dangerouslySetInnerHTML={{ __html: episode.description }}
              />
            </Stack>
          </Collapse>

          <Button
            onClick={handleCollapse}
            // variant="outlined"
            size="small"
            // sx={{ mt: 2, justifySelf: "center" }}
          >
            {showingDescription ? "Show less" : "Show more"}
          </Button>

          <Stack
            spacing={1.5}
            direction="row"
            alignItems="center"
            sx={{ pt: 1.5 }}
          >
            {/* <Avatar
              src={episode.author.avatarUrl}
              sx={{ width: 40, height: 40 }}
            /> */}
            <Stack>
              {/* <Typography variant="body2">{episode.author.name}</Typography> */}
              <Typography variant="caption" sx={{ color: "text.disabled" }}>
                {episode.duration}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
}

ElearningPostItem.propTypes = {
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
