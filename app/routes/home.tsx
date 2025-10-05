import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Navbar } from '../components/Navbar';
import { HomeComp } from '../components/Home';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Seandre's Site" },
    { name: "description", content: "Writing, music and thoughts" },
  ];
}

// const arr = [<Navbar />, <Welcome />];
const arr = [<Navbar />, <HomeComp />];

export default function Home() {
  return (
    arr
    );
}
