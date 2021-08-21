import FetchHome from "./FetchHome";

const Home = () => {
  return (
    <>
      <div className="my-home-container">
        <div className="continue-watching">
          <FetchHome path="/media" />
        </div>
      </div>
    </>
  );
};

export default Home;
