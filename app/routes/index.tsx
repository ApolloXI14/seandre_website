import type { Route } from "./+types/index";
import { Navbar } from '../components/Navbar';
import { Outlet } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Seandre's Site" },
    { name: "description", content: "Writing, music and thoughts" },
  ];
}

const arr = [<Navbar />, <Outlet />];

export default function Home() {
  return arr;
}
