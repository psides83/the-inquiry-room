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

// ----------------------------------------------------------------------

export default function ElearningPostItem({ episode }) {
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
          <Link
            // component={RouterLink}
            // href={paths.eLearning.episode}
            color="inherit"
          >
            <TextMaxLine variant="h6" persistent>
              {episode.title}
            </TextMaxLine>
          </Link>

          <TextMaxLine
            variant="body2"
            // persistent
            color="text.secondary"
            sx={{ mt: -3 }}
            dangerouslySetInnerHTML={{ __html: episode.description }}
          />

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
