import type { NextPage } from "next";

import Common from "components/layouts/Common";

const Home: NextPage = () => {
  return (
    <>
      <Common>
        <div className="flex justify-center my-5">
          <h1 className="text-3xl">Top</h1>
        </div>
      </Common>
    </>
  );
};

export default Home;
