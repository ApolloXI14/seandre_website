import type { Route } from "./+types/home";
import { Navbar } from '../components/Navbar';
import { HomeComp } from '../components/Home';
// import { Outlet } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Seandre's Site" },
    { name: "description", content: "Writing, music and thoughts" },
  ];
}

const arr = [<Navbar />, <HomeComp />];

export default function Home() {
  return arr;
}
