export interface Video {
  id: {
    videoId: string;
  };
  snippet: {
    channelTitle: string;
    title: string;
    description: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
  };
}
