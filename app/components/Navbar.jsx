import Link from "next/link";



const Navbar = () => {
  return (
    <div className="">
      <div className="navbar bg-slate-100">
        <div className="flex-1">
        <img width="30px" src="https://ik.imagekit.io/9kllv04exw/1676364-200.png?updatedAt=1720613260132" alt="" />
          <Link href="/" className="btn btn-ghost text-xl">FullStack.college</Link>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          <div className="dropdown dropdown-end">
            
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
