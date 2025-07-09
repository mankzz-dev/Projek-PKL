import PostCard from "../postcard";

export default function FeedList() {
  const dummyPosts = [1];

  return (
    <div className="flex flex-col gap-6 mt-6">
      {dummyPosts.map((_, index) => (
        <PostCard key={index} />
      ))}
    </div>
  );
}