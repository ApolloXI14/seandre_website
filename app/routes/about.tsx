import type { Route } from "./+types/about";
import { AboutComp } from '../components/About';
// import { Outlet } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Seandre's Site" },
    { name: "description", content: "Writing, music and thoughts" },
  ];
}

const arr = [<AboutComp />];

export default function Home() {
  return arr;
}
