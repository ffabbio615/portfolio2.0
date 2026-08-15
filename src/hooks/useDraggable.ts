import { useRef } from "react";

type Position = {
    x: number;
    y: number;
};

type UseDraggableProps = {
    id: string;
    position: Position;
    onMove: (
        id: string,
        position: Position
    ) => void;
};

export function useDraggable({
    id,
    position,
    onMove
}: UseDraggableProps) {

    const dragData = useRef({
        dragging: false,
        offsetX: 0,
        offsetY: 0,
    });

    const hasMoved = useRef(false);


    const handlePointerDown = (
        event: React.PointerEvent<HTMLElement>,
        currentPosition = position
    ) => {
        event.currentTarget.setPointerCapture(event.pointerId);

        dragData.current.dragging = true;

        hasMoved.current = false;

        dragData.current.offsetX =
            event.clientX - currentPosition.x;

        dragData.current.offsetY =
            event.clientY - currentPosition.y;
    };


    const handlePointerMove = (
        event: React.PointerEvent<HTMLElement>
    ) => {
        if (!dragData.current.dragging) return;

        hasMoved.current = true;

        const newPosition = {
            x: event.clientX - dragData.current.offsetX,
            y: event.clientY - dragData.current.offsetY,
        };

        onMove(id, newPosition);
    };


    const handlePointerUp = () => {
        dragData.current.dragging = false;
    };


    return {
        handlePointerDown,
        handlePointerMove,
        handlePointerUp,
        hasMoved
    };
}