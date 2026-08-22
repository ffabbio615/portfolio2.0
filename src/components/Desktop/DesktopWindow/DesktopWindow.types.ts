import type { RefObject } from "react";

export type Position = {
    x: number;
    y: number;
};

export type WindowData = {
    id: string;
    title: string;
    icon: string;
    position: Position | null;
    index: number;
    windowMode: WindowMode;
};

export type WindowProps = {
    id: string;
    title: string;
    icon: string;
    position: Position | null;
    index: number,
    windowMode: WindowMode,
    isFront: boolean;
    selected: boolean;

    onClick?: (id: string) => void;
    onPointerDown: (id: string) => void;
    onDoubleClick?: (id: string) => void;
    onMinimize: (id: string) => void;
    onMove?: (
        id: string,
        position: { x: number; y: number }
    ) => void;
    onClose: (id: string) => void;

    desktopRef: RefObject<HTMLElement | null>;
};

export type WindowMode = "windowed" | "maximized" | "minimized" | "closed" | "pre-minimized";