export type DockItem = {
    id: string;
    name: string;
    icon: string;
    type: "window" | "link";
    link?: string;
};

export type DockProps = {
    onOpen?: (item: DockItem) => void;
}