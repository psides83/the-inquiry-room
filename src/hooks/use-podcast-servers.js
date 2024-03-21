"use client";

export default function usePodcastServers() {
  const [podcastServers, setPodcastServers] = useState({});

  const url =
    "https://psides83.github.io/fbce-website-resources/json/podcast-servers.json";

  const fetchData = useCallback(async () => {
    const response = await fetch(url);
    const json = response.json();

    console.log(json);
    setPodcastServers(json);
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return [podcastServers];
}
