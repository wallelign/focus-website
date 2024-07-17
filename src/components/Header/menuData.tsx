import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/video",
    newTab: false,
  },
  {
    id: 33,
    title: "Blog",
    path: "#",
    newTab: false,
  },
  {
    id: 3,
    title: "Services",
    path: "/feature",
    newTab: false,
  },
  {
    id: 4,
    title: "Pages",
    newTab: false,
    submenu: [
      // {
      //   id: 41,
      //   title: "About Page",
      //   path: "/about",
      //   newTab: false,
      // },
      // {
      //   id: 42,
      //   title: "Contact Page",
      //   path: "/contact",
      //   newTab: false,
      // },
      {
        id: 43,
        title: "Blog ",
        path: "#",
        newTab: false,
      },
      // {
      //   id: 44,
      //   title: "Blog Sidebar Page",
      //   path: "/blog-sidebar",
      //   newTab: false,
      // },
      // {
      //   id: 45,
      //   title: "Blog Details",
      //   path: "/blog-details",
      //   newTab: false,
      // },
      {
        id: 46,
        title: "Sign In ",
        path: "#",
        newTab: false,
      },
      {
        id: 47,
        title: "Sign Up",
        path: "#",
        newTab: false,
      },
      // {
      //   id: 48,
      //   title: "Error Page",
      //   path: "/error",
      //   newTab: false,
      // },
    ],
  },
];
export default menuData;
