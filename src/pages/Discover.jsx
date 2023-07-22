import { useDispatch, useSelector } from "react-redux";

import { Error, Loader, SongCard } from "../components";

import { useGetTopChartsQuery } from "../redux/services/shazamCore";
import { logo } from "../assets";

const Discover = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetTopChartsQuery();

  if (isFetching) return <Loader title="Loading Songs..." />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-center items-center sm:flex-row flex-col mt-4 mb-10">
        <img src={logo} alt="xxx" />
        <h2 className=" text-5xl text-white font-mono">
          Coffee<span className="text-red-500 font-bold">Tify</span>
        </h2>
      </div>
      <div className="flex flex-wrap sm:justify-center justify-center gap-8">
        {data?.tracks.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            i={i}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
          />
        ))}
      </div>
    </div>
  );
};

export default Discover;
