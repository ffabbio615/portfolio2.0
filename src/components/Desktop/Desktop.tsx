import Dock from "./Dock/Dock";
import TopBar from "./TopBar/TopBar";
import Wallpaper from "./Wallpaper/Wallpaper";

export default function Desktop() {
  return (
    <main className="desktop">
        <TopBar />
        <Dock />
        <Wallpaper />
    </main>
  );
}