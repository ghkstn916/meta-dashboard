import { projects } from "@/lib/projects";
import Dashboard from "./dashboard";

export default function Home() {
  return <Dashboard projects={projects} />;
}
