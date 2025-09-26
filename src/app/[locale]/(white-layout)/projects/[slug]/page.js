import SingleProject from "@/components/webpages/SingleProject";

const SingleProjectPage = ({ params }) => {
  console.log("Params: ", params);

  return <SingleProject params={params} />;
};

export default SingleProjectPage;
