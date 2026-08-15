import './Desktop.scss';
import { useState, useRef } from "react";
import TopBar from "./TopBar/TopBar";
import FolderIcon from "./FolderIcon/FolderIcon";
import DesktopWindow from "./DesktopWindow/DesktopWindow";
import Dock from "./Dock/Dock";
import Wallpaper from "./Wallpaper/Wallpaper";
import type { Position } from "./DesktopWindow/DesktopWindow.types";

const WINDOW_POSITION_STORAGE_KEY = "desktop-window-position";

const getSavedWindowPosition = (): Position | null => {
    const savedPosition = localStorage.getItem(
        WINDOW_POSITION_STORAGE_KEY
    );

    if (!savedPosition) {
        return null;
    }

    return JSON.parse(savedPosition);
};


export default function Desktop() {

    const desktopRef = useRef<HTMLElement>(null);

    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [folders, setFolders] = useState([
        {
            id: "projects",
            name: "WORK",
            icon: "/icon/folder-icon.svg",
            position: {
                x: 20,
                y: 50
            }
        },
        {
            id: "documents",
            name: "Work Project 2",
            icon: "/icon/folder-icon.svg",
            position: {
                x: 20,
                y: 180
            }
        }
    ]);
    const [windows, setWindows] = useState([
        {
            id: "projects",
            title: "Projetos",
            icon: "/icon/folder-icon.svg",
            position: getSavedWindowPosition(),
        }
    ]);

    const handleClick = (id: string) => {
        setSelectedId(id);
    };

    const handleDoubleClick = (id: string) => {
        console.log("Abrindo", id);
    };

    const handleMove = ( id: string,  position: { x: number; y: number } ) => {
        setSelectedId(id);

        setFolders(prev =>
            prev.map(folder =>
                folder.id === id
                    ? {
                        ...folder,
                        position
                    }
                    : folder
            )
        );
    };

    const handleWindowMove = (
        id: string,
        position: Position
    ) => {
        setWindows(prev =>
            prev.map(window =>
                window.id === id
                    ? {
                        ...window,
                        position
                    }
                    : window
            )
        );

        localStorage.setItem(
            WINDOW_POSITION_STORAGE_KEY,
            JSON.stringify(position)
        );
    };

  return (
    <main ref={desktopRef} className="desktop" onClick={() => setSelectedId(null)}>
        <TopBar />

        {folders.map(folder => (
            <FolderIcon
                key={folder.id}
                id={folder.id}
                name={folder.name}
                icon={folder.icon}
                position={folder.position}
                selected={selectedId === folder.id}
                onClick={handleClick}
                onDoubleClick={handleDoubleClick}
                onMove={handleMove}
            />
        ))}

        {windows.map(window => (
            <DesktopWindow
                key={window.id}
                id={window.id}
                title={window.title}
                icon={window.icon}
                position={window.position}
                selected={selectedId === window.id}
                onClick={handleClick}
                onDoubleClick={handleDoubleClick}
                onMove={handleWindowMove}
                desktopRef={desktopRef}
            />
        ))}

        <Dock />
        <Wallpaper />
    </main>
  );
}