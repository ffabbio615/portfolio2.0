export type FolderIconProps = {
    id: string;
    name: string;
    icon: string;

    position: {
        x: number;
        y: number;
    };

    selected: boolean;

    onClick?: (id: string) => void;
    onDoubleClick?: (id: string) => void;
    onMove?: (
        id: string,
        position: { x: number; y: number }
    ) => void;
};