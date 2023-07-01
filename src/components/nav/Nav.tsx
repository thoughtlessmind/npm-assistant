import HorizontalPadding from "../horizontalPadding/HorizontalPadding";

const Nav = () => {
  return (
    <nav className="component-wrapper sticky top-0 bg-primary-3 shadow-md">
      <HorizontalPadding>
        <div className="flex justify-between py-4">
          <div className="flex justify-around gap-3 items-center">
            <div className="rounded-full bg-[url('https://picsum.photos/200/300')] h-10 w-10"></div>
            <input placeholder="search" className="p-2 rounded-md" />
          </div>
        </div>
      </HorizontalPadding>
    </nav>
  );
};

export default Nav;
