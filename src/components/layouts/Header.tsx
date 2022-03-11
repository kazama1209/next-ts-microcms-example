import Link from "next/link";

const Header: React.FC = () => {
  const links = [
    { name: "Top", path: "/" },
    { name: "Blog", path: "/blog/page/1" },
  ];

  return (
    <div className="flex justify-center m-3">
      {links.map(({ name, path }) => {
        return (
          <div key={name} className="mx-2 font-bold">
            <Link href={path}>{name}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Header;
