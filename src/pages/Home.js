import ListingPage from "./ListingPage";

const Home = () => {
  return (
    <div className="my-10">
      <div className="">
        <img src="https://ik.imagekit.io/adityaportfolio/Ecomm/deadpool_banner_nHsTVen0k.webp?updatedAt=1722029064551" alt="Banner" className="w-full rounded-lg" />
      </div>
      <ListingPage randomCategory />
    </div >
  );
}

export default Home;

