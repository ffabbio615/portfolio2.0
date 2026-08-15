import type { RefObject } from "react";

export type Position = {
    x: number;
    y: number;
};

export type WindowProps = {
    id: string;
    title: string;
    icon: string;

    position: Position | null;

    selected: boolean;

    onClick?: (id: string) => void;
    onDoubleClick?: (id: string) => void;
    onMove?: (
        id: string,
        position: { x: number; y: number }
    ) => void;

    desktopRef: RefObject<HTMLElement | null>;
};