import "./DesktopWindow.scss";
import { useRef, useState } from "react";
import { useDraggable } from "../../../hooks/useDraggable";
import type { WindowProps, Position } from "./DesktopWindow.types";

export default function DesktopWindow({id, title, icon, position, selected, onMove, onClick, onDoubleClick, desktopRef,}: WindowProps){

    const windowRef = useRef<HTMLElement>(null);

    const currentPosition: Position = position ?? {
        x: 0,
        y: 0,
    };

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

        if (position === null) {
            onMove(id, currentPosition);
        }

        handlePointerDown(event, currentPosition);
    };

    const [windowMode, setWindowMode] = useState<"windowed" | "maximized" | "minimized">("windowed");

    return (
        <section ref={windowRef} className={`window ${selected ? "selected" : ""} ${windowMode} ${
    position === null ? "centered" : ""
}`}  style={ windowMode === "windowed" && position ? {left: position.x, top: position.y, } : undefined }>
            <header 
                className="window-title-bar" 
                onPointerDown={handleWindowPointerDown} 
                onPointerMove={windowMode === "windowed" ? handlePointerMove : undefined} 
                onPointerUp={handlePointerUp} 
                onClick={(e: React.MouseEvent<HTMLElement>) => {e.stopPropagation(); if (!hasMoved.current) {onClick?.(id);}}}
                onDoubleClick={() => onDoubleClick(id)}
            >
                <div className="window-title">
                    <img src={icon} alt={`Ícone da pasta ${title}`} />
                    <h3>{title}</h3>
                </div>

                <div className="window-behavior-buttons">
                    <button className="behavior-button" title={"Minimizar"} onClick={(e) => {e.stopPropagation(); setWindowMode("minimized");}}>
                        <img src={"/icon/yellow-circle-icon.svg"} alt="Ícone de minimizar a janela" />
                    </button>
                    
                    <button className="behavior-button" title={windowMode === "windowed" ? "Maximizar" : "Restaurar"}  onPointerDown={(e) => e.stopPropagation()} 
                    onClick={(e) => {e.stopPropagation(); setWindowMode((currentMode) => currentMode === "windowed" ? "maximized" : "windowed");}}>
                        <img src={"/icon/green-circle-icon.svg"} alt="Ícone de maximizar a janela" />
                    </button>
                    
                    <button className="behavior-button" title={"Fechar"}><img src={"/icon/red-circle-icon.svg"} alt="Ícone de fechar a janela" /></button>
                </div>
            </header>

            <div className="window-content">
                ...
            </div>
        </section>
    );
}
