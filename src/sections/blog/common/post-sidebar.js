import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";

import { useResponsive } from "src/hooks/use-responsive";

import { _socials } from "src/_mock";

import Iconify from "src/components/iconify";

import Advertisement from "../../advertisement";
import PostItemMobile from "./post-item-mobile";
import PodcastServers from "src/sections/_podcast/view/podcast-servers-view";
import jeremyImage from "/public/assets/images/jeremy-brown.jpg";
import paytonImage from "/public/assets/images/payton-sides.jpeg";
import Image from "src/components/image";

// ----------------------------------------------------------------------

export default function PostSidebar({
  categories,
  popularTags,
  recentPosts,
  advertisement,
  podcastServers,
  searchText,
  setSearchText,
  sx,
  ...other
}) {
  const mdUp = useResponsive("up", "md");

  const authors = [
    {
      name: "Jeremy Brown",
      bio: "Jeremy holds a Master's of Divinity at Beeson Divinity School. He is a staff pastor at First Baptist Church in Eclectic, AL where he oversee ministry to families. Jeremy is passionate about equipping the the church through prayer, preaching, and family discipleship.",
      image:
        "https://psides83.github.io/fbce-website-resources/images/jeremy-brown.jpg",
      socials: [
        {
          value: "facebook",
          label: "FaceBook",
          icon: "carbon:logo-facebook",
          color: "#1877F2",
          url: "",
        },
        {
          value: "instagram",
          label: "Instagram",
          icon: "carbon:logo-instagram",
          color: "#E02D69",
          url: "",
        },
        {
          value: "linkedin",
          label: "Linkedin",
          icon: "carbon:logo-linkedin",
          color: "#007EBB",
          url: "",
        },
        {
          value: "twitter",
          label: "Twitter",
          icon: "carbon:logo-twitter",
          color: "#00AAEC",
          url: "",
        },
      ],
    },
    {
      name: "Payton Sides",
      bio: "Payton is a member of First Baptist Church Eclectic. He usually often dedicates most of his free time to the study of theology and philosophy. Payton started this podcast because he believes the local church in general has lost the noble pursuit of the knowledge of God in place of feelings based subjective personal religion.",
      image:
        "https://psides83.github.io/fbce-website-resources/images/payton-sides2.jpeg",
      socials: [
        {
          value: "facebook",
          label: "FaceBook",
          icon: "carbon:logo-facebook",
          color: "#1877F2",
          url: "",
        },
        {
          value: "instagram",
          label: "Instagram",
          icon: "carbon:logo-instagram",
          color: "#E02D69",
          url: "",
        },
        {
          value: "linkedin",
          label: "Linkedin",
          icon: "carbon:logo-linkedin",
          color: "#007EBB",
          url: "",
        },
        {
          value: "twitter",
          label: "Twitter",
          icon: "carbon:logo-twitter",
          color: "#00AAEC",
          url: "",
        },
      ],
    },
  ];

  const renderAuthors = (
    <>
      <Typography variant="h5">Hosts</Typography>
      {authors.map((author) => (
        <Stack spacing={2} direction="row" sx={{ mb: { md: 5 } }}>
          <Avatar src={author.image} sx={{ width: 128, height: 128 }} />
          {/* <Image
            src={author.image}
            sx={{
              width: 128,
              height: 128,
              flexShrink: 0,
              borderRadius: 1.5,
            }}
          /> */}

          <Stack>
            <Typography variant="h6">{author.name}</Typography>

            <Typography
              variant="body2"
              sx={{ mt: 0.5, mb: 2, color: "text.secondary" }}
            >
              {author.bio}
            </Typography>

            {/* <Stack direction="row">
              {_socials.map((social) => (
                <IconButton key={social.value}>
                  <Iconify icon={social.icon} sx={{ color: social.color }} />
                </IconButton>
              ))}
            </Stack> */}
          </Stack>
        </Stack>
      ))}
    </>
  );

  // const renderCategories = categories && (
  //   <Stack spacing={1}>
  //     <Typography variant="h5" gutterBottom>
  //       Categories
  //     </Typography>

  //     {categories.map((category) => (
  //       <Stack key={category.label} direction="row" alignItems="center">
  //         <Box
  //           sx={{
  //             mr: 2,
  //             width: 6,
  //             height: 6,
  //             borderRadius: "50%",
  //             bgcolor: "primary.main",
  //           }}
  //         />

  //         <Link variant="body2" href={category.path} color="inherit">
  //           {category.label}
  //         </Link>
  //       </Stack>
  //     ))}
  //   </Stack>
  // );

  // const renderRecentPosts = recentPosts && (
  //   <Stack spacing={3}>
  //     <Typography variant="h5">Recent Posts</Typography>

  //     {recentPosts.list.map((post) => (
  //       <PostItemMobile key={post.id} post={post} onSiderbar />
  //     ))}
  //   </Stack>
  // );

  const renderPopularTags = popularTags && (
    <Stack spacing={3}>
      <Typography variant="h5">Popular Tags</Typography>

      <Stack direction="row" flexWrap="wrap" spacing={1}>
        {popularTags.map((tag) => (
          <Chip
            key={tag}
            label={tag}
            variant="soft"
            size="small"
            onClick={(e) => {
              setSearchText(tag);
            }}
          />
        ))}
      </Stack>
    </Stack>
  );

  return (
    <>
      {mdUp}

      {mdUp && (
        <TextField
          fullWidth
          hiddenLabel
          placeholder="Search..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Iconify
                  icon="carbon:search"
                  width={24}
                  sx={{ color: "text.disabled" }}
                />
              </InputAdornment>
            ),
          }}
        />
      )}

      <Stack
        spacing={5}
        sx={{
          pt: { md: 5 },
          pb: { xs: 8, md: 0 },
          ...sx,
        }}
        {...other}
      >
        {/* {renderCategories} */}

        {/* {renderRecentPosts} */}

        {/* {renderPopularTags} */}

        <PodcastServers podcastServers={podcastServers} />

        <Typography variant="h5">What is The Inquiry Room</Typography>
        <Typography variant="body1" sx={{ mt: -4 }}>
          The Inquiry Room presents conversations from and within the local
          church and seeks to answer the tough questions on Theology, Christian
          Philosophy, and the Bible. No question is off the table in the Inquiry
          room. We strive to point you toward the rich truths of the Bible and
          God's work in redemptive history. Episodes include guests whenever
          they’re available to join us.
        </Typography>

        {renderAuthors}

        {/* {advertisement && <Advertisement advertisement={advertisement} />} */}
      </Stack>
    </>
  );
}

PostSidebar.propTypes = {
  advertisement: PropTypes.object,
  author: PropTypes.shape({
    avatarUrl: PropTypes.string,
    name: PropTypes.string,
    role: PropTypes.string,
  }),
  categories: PropTypes.array,
  popularTags: PropTypes.array,
  recentPosts: PropTypes.shape({
    list: PropTypes.array,
  }),
  sx: PropTypes.object,
};
