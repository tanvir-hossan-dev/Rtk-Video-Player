import { useGetVideosQuery } from "../../redux/features/apiSlice/apiSlice";
import Video from "./Video";
import VideoLoader from "../ui/loaders/VideoLoader";
import Error from "../ui/Error";

export default function Videos() {
  const { data: vidoes, isError, isLoading } = useGetVideosQuery();

  let content = null;
  if (isLoading) {
    content = (
      <>
        <VideoLoader />
        <VideoLoader />
        <VideoLoader />
        <VideoLoader />
        <VideoLoader />
      </>
    );
  }
  if (!isLoading && isError) {
    content = <Error message="There was an error" />;
  }
  if (!isLoading && !isError && vidoes.length === 0) {
    content = <Error message="No Video found!" />;
  }
  if (!isLoading && !isError && vidoes?.length > 0) {
    content = vidoes.map((video) => <Video key={video.id} video={video} />);
  }
  return content;
}
