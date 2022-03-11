import Head from "next/head";

import Header from "./Header";

type CommonProps = {
  children: React.ReactElement;
  title?: string;
};

const Common: React.FC<CommonProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title ? title : "Next.js-microCMS-Example"}</title>
      </Head>
      <header>
        <Header />
      </header>
      <main>{children}</main>

      <style jsx global>
        {`
          html,
          body {
            background: #fff;
            overflow-x: hidden;
            padding: 0 !important;
          }
          #__next {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          main {
            flex: 1;
          }
        `}
      </style>
    </>
  );
};

export default Common;
