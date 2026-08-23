import './FolderIcon.scss';
import type { FolderIconProps } from "./FolderIcon.types";
import { useDraggable } from "../../../hooks/useDraggable";

export default function FolderIcon({id, name, icon, position, selected, onMove, onClick, onDoubleClick,}: FolderIconProps){

    const { handlePointerDown, handlePointerMove, handlePointerUp, hasMoved } = useDraggable({ id, position, onMove: onMove!, });

    return (
        <div className={`folder-icon ${selected ? 'selected' : ''}`}
            style={{ left: position.x, top: position.y, }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onClick={(e: React.MouseEvent<HTMLDivElement>) => {e.stopPropagation(); if (!hasMoved.current) {onClick?.(id);}}}
            onDoubleClick={() => onDoubleClick(id)}
        >
            <img src={icon} alt={name} draggable={false} />
            <h2>{name}</h2>
        </div>
    );
}