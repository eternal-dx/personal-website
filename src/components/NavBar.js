import PageLink from "./NavLink";

export default function NavBar() {
  return (
    <nav className="w-9/12 h-20 flex items-center rounded-3xl bg-[#3f3f3f] shadow-lg shadow-[#282828] backdrop-filter backdrop-blur p-4 mt-4">
      <div className="w-full h-full flex items-center justify-between">
        <div className="font-semibold text-white text-3xl">
          <PageLink link={"./"} text={"brennan cleland."} />
        </div>
        <div className="w-1/4 flex items-center justify-evenly font-medium text-white text-2xl">
          <PageLink link={"#my-page"} text={"about."} />
          <PageLink link={"#my-page"} text={"projects."} />
          <PageLink link={"#my-page"} text={"resume."} />
        </div>
      </div>
    </nav>
  )
}