// class to fetch any json data that the site uses
class SiteData {
  baseURL = "https://psides83.github.io/fbce-website-resources/json/";

  // global json data links
  urls = {
    staff: this.baseURL.concat("staff-data.json"),
    whoWeAre: this.baseURL.concat("who-we-are.json"),
    baptistFaith: this.baseURL.concat("baptist-faith.json"),
    gospel: this.baseURL.concat("gospel.json"),
    membership: this.baseURL.concat("membership.json"),
    worshipSection: this.baseURL.concat("worship-section.json"),
    serviceStreams: this.baseURL.concat("service-streams.json"),
    blogPosts: this.baseURL.concat("blog-posts.json"),
    bibleStudies: this.baseURL.concat("bible-studies.json"),
    podcastServers: this.baseURL.concat("podcast-servers.json"),
    times: this.baseURL.concat("times.json"),
  };

  // eslint-disable-next-line
  async fetchData(url) {
    const response = await fetch(url);
    return response.json();
  }

  // eslint-disable-next-line
  staff = async () => await this.fetchData(this.urls.staff);

  // eslint-disable-next-line
  whoWeAre = async () => await this.fetchData(this.urls.whoWeAre);

  // eslint-disable-next-line
  baptistFaith = async () => await this.fetchData(this.urls.baptistFaith);

  // eslint-disable-next-line
  gospel = async () => await this.fetchData(this.urls.gospel);

  // eslint-disable-next-line
  membership = async () => await this.fetchData(this.urls.membership);

  // eslint-disable-next-line
  worshipSection = async () => await this.fetchData(this.urls.worshipSection);

  // eslint-disable-next-line
  serviceStreams = async () => await this.fetchData(this.urls.serviceStreams);

  // eslint-disable-next-line
  blogPosts = async () => await this.fetchData(this.urls.blogPosts);

  // eslint-disable-next-line
  bibleStudies = async () => await this.fetchData(this.urls.bibleStudies);

  // eslint-disable-next-line
  podcastServers = async () => await this.fetchData(this.urls.podcastServers);

  // eslint-disable-next-line
  times = async () => await this.fetchData(this.urls.times);
}

const siteData = new SiteData();

export default siteData;
