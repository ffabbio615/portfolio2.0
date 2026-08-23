import './Desktop.scss';
import { useState, useRef } from "react";
import TopBar from "./TopBar/TopBar";
import FolderIcon from "./FolderIcon/FolderIcon";
import DesktopWindow from "./DesktopWindow/DesktopWindow";
import Dock from "./Dock/Dock";
import Wallpaper from "./Wallpaper/Wallpaper";
import type { Position, WindowData } from "./DesktopWindow/DesktopWindow.types";
import WindowsDock from './WindowsDock/WindowsDock';
import type { DockItem } from './Dock/Dock.types';

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
            id: "hobbies",
            name: "Hobbies",
            icon: "/icon/desktop/folder-icon.svg",
            position: {
                x: 20,
                y: 50
            }
        },
        {
            id: "music",
            name: "Músicas",
            icon: "/icon/desktop/folder-icon.svg",
            position: {
                x: 20,
                y: 180
            }
        },
        {
            id: "movies",
            name: "Filmes",
            icon: "/icon/desktop/folder-icon.svg",
            position: {
                x: 20,
                y: 310
            }
        },
        {
            id: "trips",
            name: "VIAGENS",
            icon: "/icon/desktop/folder-icon.svg",
            position: {
                x: 20,
                y: 440
            }
        },
        {
            id: "events",
            name: "Eventos",
            icon: "/icon/desktop/folder-icon.svg",
            position: {
                x: 150,
                y: 50
            }
        },
        {
            id: "testimonials",
            name: "DEPOIMENTOS",
            icon: "/icon/desktop/folder-icon.svg",
            position: {
                x: 150,
                y: 180
            }
        }
    ]);

    const [windows, setWindows] = useState<WindowData[]>([
        // {
        //     id: "w-projects",
        //     title: "Projetos",
        //     icon: "/icon/folder-icon.svg",
        //     position: getSavedWindowPosition(),
        //     index: 1,
        // }
    ]);


    //COMPORTAMENTO DAS PASTAS
    const handleClick = (id: string) => {
        setSelectedId(id);
    };

    const handleDoubleClick = (id: string) => {
        const folder = folders.find(f => f.id === id);

        if (!folder) return;

        const existingWindow = windows.find(
            window => window.id === `w-${id}`
        );

        if (existingWindow) {
            if (existingWindow.windowMode === "minimized") {
                handleWindowRestore(existingWindow.id);
            }

            return;
        }

        setWindows(prev => {
            const lastWindow = prev[prev.length - 1];

            const newPosition = lastWindow?.position
                ? {
                    x: lastWindow.position.x + 30,
                    y: lastWindow.position.y + 30,
                }
                : getSavedWindowPosition();

            const reorganizedWindows = prev.map((window, index) => ({
                ...window,
                index: index + 1,
            }));

            return [
                ...reorganizedWindows,
                {
                    id: `w-${folder.id}`,
                    title: folder.name,
                    icon: folder.icon,
                    position: newPosition,
                    index: reorganizedWindows.length + 1,
                    windowMode: "windowed",
                },
            ];
        });
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

    //COMPORTAMENTO DOS APPS DO DOCK
    const handleDockOpen = (item: DockItem) => {
        setWindows(prev => {
            const windowId = `w-${item.id}`;

            const existingWindow = prev.find(
                window => window.id === windowId
            );

            if (existingWindow) {
                if (existingWindow.windowMode === "minimized") {
                    handleWindowRestore(existingWindow.id);
                }

                return prev;
            }

            const lastWindow = prev[prev.length - 1];

            const newPosition = lastWindow?.position
                ? {
                    x: lastWindow.position.x + 30,
                    y: lastWindow.position.y + 30,
                }
                : getSavedWindowPosition();

            const reorganizedWindows = prev.map((window, index) => ({
                ...window,
                index: index + 1,
            }));

            return [
                ...reorganizedWindows,
                {
                    id: windowId,
                    title: item.name,
                    icon: item.icon,
                    position: newPosition,
                    index: reorganizedWindows.length + 1,
                    windowMode: "windowed",
                },
            ];
        });
    };

    //COMPORTAMENTO DAS JANELAS
    const handleWindowFront = (id: string) => {
        setSelectedId(id);

        setWindows(prev => {
            const clickedWindow = prev.find(window => window.id === id);

            if (!clickedWindow) return prev;

            // Se já estiver na frente, não precisa reorganizar
            if (clickedWindow.index === prev.length) {
                return prev;
            }

            return [
                ...prev
                    .filter(window => window.id !== id)
                    .sort((a, b) => a.index - b.index)
                    .map((window, index) => ({
                        ...window,
                        index: index + 1,
                    })),

                {
                    ...clickedWindow,
                    index: prev.length,
                },
            ];
        });
    };

    const handleWindowDoubleClick = (id: string) => {
        setWindows(prev =>
            prev.map(window =>
                window.id === id
                    ? {
                        ...window,
                        windowMode:
                            window.windowMode === "maximized"
                                ? "windowed"
                                : "maximized",
                    }
                    : window
            )
        );

        const window = windows.find(window => window.id === id);

        if(window.windowMode === "windowed") handleWindowFront(id);
    };

    const handleWindowMinimize = (id: string) => {

        setWindows(prev =>
            prev.map(window =>
                window.id === id
                    ? {
                        ...window,
                        windowMode: "pre-minimized",
                    }
                    : window
            )
        );

        setTimeout(()=> setWindows(prev => {
            const minimizedWindow = prev.find(window => window.id === id);

            if (!minimizedWindow) return prev;

            return [
                {
                    ...minimizedWindow,
                    index: 1,
                    windowMode: "minimized",
                },

                ...prev
                    .filter(window => window.id !== id)
                    .sort((a, b) => a.index - b.index)
                    .map((window, index) => ({
                        ...window,
                        index: index + 2,
                    })),
            ];
        }), 500);
    };

    const handleWindowRestore = (id: string) => {
        setWindows(prev => {
            const restoredWindow = prev.find(window => window.id === id);

            if (!restoredWindow) return prev;

            return [
                ...prev
                    .filter(window => window.id !== id)
                    .sort((a, b) => a.index - b.index)
                    .map((window, index) => ({
                        ...window,
                        index: index + 1,
                    })),

                {
                    ...restoredWindow,
                    index: prev.length,
                    windowMode: "windowed",
                },
            ];
        });
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

    const handleWindowClose = (id: string) => {
        setWindows(prev =>
            prev.map(window =>
                window.id === id
                    ? {
                        ...window,
                        windowMode: "closed",
                    }
                    : window
            )
        );
        setTimeout(()=> setWindows(prev => prev.filter(window => window.id !== id)), 500);
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

        {windows
            .filter(window => window.windowMode === "windowed" || window.windowMode === "maximized" || window.windowMode === "closed" || window.windowMode === "pre-minimized")
            .map(window => (
                <DesktopWindow
                    key={window.id}
                    id={window.id}
                    title={window.title}
                    icon={window.icon}
                    position={window.position}
                    index={window.index}
                    windowMode={window.windowMode}
                    selected={selectedId === window.id}
                    isFront={window.index === windows.length}
                    onClick={handleClick}
                    onDoubleClick={handleWindowDoubleClick}
                    onMinimize={handleWindowMinimize}
                    onMove={handleWindowMove}
                    onPointerDown={handleWindowFront}
                    onClose={handleWindowClose}
                    desktopRef={desktopRef}
                />
            ))
        }


        <WindowsDock>
            {windows
                .filter(window => window.windowMode === "minimized")
                .map(window => (
                    <DesktopWindow
                        key={window.id}
                        id={window.id}
                        title={window.title}
                        icon={window.icon}
                        position={window.position}
                        index={window.index}
                        windowMode={window.windowMode}
                        selected={selectedId === window.id}
                        isFront={window.index === windows.length}
                        onClick={handleClick}
                        onDoubleClick={handleWindowRestore}
                        onMinimize={handleWindowMinimize}
                        onMove={handleWindowMove}
                        onPointerDown={handleWindowFront}
                        onClose={handleWindowClose}
                        desktopRef={desktopRef}
                    />
                ))
            }
        </WindowsDock>

        <Dock onOpen={handleDockOpen} />

        <Wallpaper />
    </main>
  );
}