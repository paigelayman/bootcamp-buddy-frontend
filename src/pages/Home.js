import { GetBootcampList } from "../services/BootcampServices";
import { useEffect, useState } from "react";
import BootcampCard from "../components/BootcampCard";

const Home = () => {
  const [bootcampList, setBootcampList] = useState(null);

  useEffect(() => {
    const getAllBootcamp = async () => {
      const bootcampsData = await GetBootcampList();
      setBootcampList(bootcampsData);
    };
    getAllBootcamp();
  }, []);

  useEffect(() => {
    if (bootcampList) {
    }
  }, [bootcampList]);

  let bootcampListRender = <div></div>;
  if (bootcampList) {
    bootcampListRender = (
      <div className="home-wrapper">
        {bootcampList.map((bootcamp) => (
          <BootcampCard key={bootcamp.id} bootcamp={bootcamp} />
        ))}
      </div>
    );
  }

  let toRender = (
    <div>
      <div className="welcome"></div>
      <div className="bootcamp-list">{bootcampListRender}</div>
    </div>
  );

  return toRender;
};
export default Home;
