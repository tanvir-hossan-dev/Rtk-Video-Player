import { useGetReletedVideosQuery } from "../../../redux/features/apiSlice/apiSlice";
import RelatedVideo from "./RelatedVideo";
import RelatedVideoLoader from "../../ui/loaders/RelatedVideoLoader";
import Error from "../../ui/Error";

export default function RelatedVideos({ title, videoId }) {
  const { data: reletedVideos, isLoading, isError } = useGetReletedVideosQuery({ videoId, title });

  let content = null;

  if (isLoading) {
    content = (
      <>
        <RelatedVideoLoader />
        <RelatedVideoLoader />
        <RelatedVideoLoader />
        <RelatedVideoLoader />
      </>
    );
  } else if (!isLoading && isError) {
    content = <Error message="There was an erro" />;
  } else if (!isLoading && !isError && reletedVideos?.length === 0) {
    content = <Error message="No releted video found" />;
  } else if (!isLoading && !isError && reletedVideos?.length > 0) {
    content = reletedVideos.map((video) => <RelatedVideo key={video.id} video={video} />);
  }
  return <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">{content}</div>;
}
