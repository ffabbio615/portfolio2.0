import "./DesktopWindow.scss";
import { useRef, useState } from "react";
import { useDraggable } from "../../../hooks/useDraggable";
import type { WindowProps, Position, WindowMode } from "./DesktopWindow.types";
import WindowSidebar from "./WindowSidebar/WindowSidebar";
import WindowContent from "./WindowContent/WindowContent";

export default function DesktopWindow({id, title, icon, position, index, selected, isFront, onClick, onDoubleClick, onMinimize, onMove, onPointerDown, onClose, desktopRef,}: WindowProps){

    const windowRef = useRef<HTMLElement>(null);

    const currentPosition: Position = position ?? {
        x: 0,
        y: 0,
    };

    const [hasPosition] = useState(position !== null);
    const [isMoving, setIsMoving] = useState<boolean>(false);

    const { handlePointerDown, handlePointerMove, handlePointerUp, hasMoved } = useDraggable({ id, position: currentPosition, onMove: onMove!, });

    const handleWindowPointerDown = (
        event: React.PointerEvent<HTMLElement>
    ) => {
        const windowElement = windowRef.current;
        const desktopElement = desktopRef.current;

        if (!windowElement || !desktopElement) return;

        const windowRect = windowElement.getBoundingClientRect();
        const desktopRect = desktopElement.getBoundingClientRect();

        const currentPosition = {
            x: windowRect.left - desktopRect.left,
            y: windowRect.top - desktopRect.top,
        };

        if (windowMode === "minimized") return;

        if (position === null) {
            onMove(id, currentPosition);
        }

        handlePointerDown(event, currentPosition);
    };

    const [windowMode, setWindowMode] = useState<WindowMode>("windowed");

    

    return (
        <section 
        ref={windowRef} 
        className={`window ${selected ? "selected" : ""} window-${windowMode} ${position === null ? "centered" : ""} ${hasPosition ? "placeble" : ""} ${isMoving ? "moving-window" : ""}`}
        style={{ zIndex: index, ...((windowMode === "windowed" || windowMode === "closed") && position ? {left: position.x, top: position.y, } : undefined) }}
        title={windowMode === "minimized" ? title : ""}
        onPointerDown={(e: React.MouseEvent<HTMLElement>) => {e.stopPropagation(); if (windowMode === "windowed") {onPointerDown(id)} }}
        onPointerUp={(e: React.MouseEvent<HTMLElement>) => {e.stopPropagation(); setIsMoving(false);}}>

            <header 
                className="window-title-bar" 
                onPointerDown={(e)=> {e.stopPropagation(); if (!isFront && windowMode === "windowed") {onPointerDown(id); return;} handleWindowPointerDown(e); setIsMoving(true);}} 
                onPointerMove={windowMode === "windowed" ? (e)=> {handlePointerMove(e);} : undefined} 
                onPointerUp={handlePointerUp} 
                onClick={(e: React.MouseEvent<HTMLElement>) => {e.stopPropagation(); setIsMoving(false); if (!hasMoved.current) {onClick?.(id);}}}
                // onDoubleClick={() => setWindowMode((currentMode) => currentMode === "windowed" ? "maximized" : "windowed")}
                onDoubleClick={()=> {onDoubleClick(id); setWindowMode((currentMode) => currentMode === "windowed" ? "maximized" : "windowed");}}
            >

                <div className="window-title">
                    <img src={icon} alt={`Ícone da pasta ${title}`} />
                    <h3>{title}</h3>
                </div>

                <div className="window-behavior-buttons">
                    <button className="behavior-button" title={windowMode !== "minimized" ? "Minimizar" : "Restaurar"}  onPointerDown={(e) => e.stopPropagation()}
                    onClick={(e) => {e.stopPropagation(); onMinimize(id); setWindowMode((currentMode) => currentMode !== "minimized" ? "minimized" : "windowed");}}>
                        <img src={"/icon/yellow-circle-icon.svg"} alt="Ícone de minimizar a janela" />
                    </button>
                    
                    <button className="behavior-button" title={windowMode === "windowed" ? "Maximizar" : "Restaurar"}  onPointerDown={(e) => e.stopPropagation()} 
                    onClick={(e) => {e.stopPropagation(); onDoubleClick(id); setWindowMode((currentMode) => currentMode === "windowed" ? "maximized" : "windowed");}}>
                        <img src={"/icon/green-circle-icon.svg"} alt="Ícone de maximizar a janela" />
                    </button>
                    
                    <button className="behavior-button" title={"Fechar"} onPointerDown={(e) => e.stopPropagation()} onClick={(e)=> {e.stopPropagation(); setWindowMode("closed"); setTimeout(()=> onClose(id), 500);}}>
                        <img src={"/icon/red-circle-icon.svg"} alt="Ícone de fechar a janela" />
                    </button>
                </div>

            </header>

            <WindowSidebar windowMode={windowMode} />

            <WindowContent windowMode={windowMode} />
        </section>
    );
}
