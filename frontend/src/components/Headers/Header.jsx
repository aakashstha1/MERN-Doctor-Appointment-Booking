import { useEffect, useRef, useContext } from "react";
import logo from "../../assets/images/logo.png";
// import userImg from "../../assets/images/avatar-icon.png";
import { BiMenu } from "react-icons/bi";
import { NavLink, Link } from "react-router-dom";
import { authContext } from "../../context/AuthContext";
const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/doctors",
    display: "Find a Doctor",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];
function Header() {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const { user, token, role } = useContext(authContext);

  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();

    return () => window.removeEventListener("scroll", handleStickyHeader);
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle("show_menu");
  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* === Logo === */}
          <div>
            <Link to={"/"}>
              <img src={logo} alt="" />
            </Link>
          </div>

          {/* === Menu === */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColor leading-7 font-[600] text-[16px]"
                        : "text-textColor leading-7 font-[500] text-[16px] hover:text-primaryColor"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* === Nav Right === */}
          <div className="flex items-center gap-4">
            {token && user ? (
              <div className="z-99">
                <Link
                  to={`${
                    role === "doctor"
                      ? "/doctors/profile/me"
                      : "/users/profile/me"
                  }`}
                >
                  <figure className="w-[35px] h-[35px] rounded-full cursor-pointer overflow-hidden">
                    <img
                      className="w-full rounded-full object-cover"
                      src={user?.photo}
                      alt=""
                    />
                  </figure>
                  {/* <h2>{user?.name}</h2> */}
                </Link>
              </div>
            ) : (
              <Link to={"/login"}>
                <button className="bg-primaryColor font-[600] py-2 px-6 h-[44px] flex items-center justify-center rounded-[50px] text-white">
                  Login
                </button>
              </Link>
            )}

            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="h-6 w-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
