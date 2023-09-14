import profile from "../../assets/images/profile.png";
const Header = () => {
  return (
    <header className="my-4">
      <div className="flex justify-between  my-4">
        <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
        <img src={profile} alt="" />
      </div>
      <hr />
    </header>
  );
};

export default Header;
