const images = [

    //BACKGROUNDS
    "/image/background.webp",
    "/image/background2.webp",
    "/image/background3.webp",

    //ÍCONES DO DESKTOP
    "/icon/desktop/folder-icon.svg",

    //ÍCONES DO DOCK
    "/icon/dock/about-me-icon.svg",
    "/icon/dock/contact-icon.svg",
    "/icon/dock/curriculum-icon.svg",
    "/icon/dock/github-icon.svg",
    "/icon/dock/linkedin-icon.svg",
    "/icon/dock/projects-icon.svg",

    //VARIAÇÕES DA LOGO
    "/icon/logo/fm-black-logo-icon.svg",
    "/icon/logo/fm-gray-logo-icon.svg",
    "/icon/logo/fm-white-logo-icon.svg",

    //ÍCONES DA TOPBAR
    "/icon/topbar/contrast-icon.svg",
    "/icon/topbar/dark-mode-icon.svg",
    "/icon/topbar/light-mode-icon.svg",
    "/icon/topbar/settings-icon.svg",
    "/icon/topbar/wifi-icon.svg",
    "/icon/topbar/magnifier-icon.svg",
    "/icon/topbar/assistant-robot.gif",
    "/icon/topbar/ai-thinking-loader.gif",

    //ÍCONES DAS JANELAS
    "/icon/window/green-circle-icon.svg",
    "/icon/window/red-circle-icon.svg",
    "/icon/window/yellow-circle-icon.svg",
  
];

const fonts = [
    "100 16px SF-Pro-Display",
    "200 16px SF-Pro-Display",
    "300 16px SF-Pro-Display",
    "400 16px SF-Pro-Display",
    "500 16px SF-Pro-Display",
    "600 16px SF-Pro-Display",
    "700 16px SF-Pro-Display",
    "800 16px SF-Pro-Display",
    "900 16px SF-Pro-Display",
];

async function preloadImage(src: string): Promise<void> {
    const image = new Image();

    image.src = src;

    await image.decode();
}

async function preloadFont(font: string): Promise<void> {
    await document.fonts.load(font);
}

export async function preloadAssets(
    onProgress: (progress: number) => void
): Promise<void> {

    const assets = [
        ...images.map((src) => () => preloadImage(src)),
        ...fonts.map((font) => () => preloadFont(font)),
    ];

    let loadedAssets = 0;

    await Promise.all(
        assets.map(async (loadAsset) => {

            await loadAsset();

            loadedAssets++;

            const progress = Math.round(
                (loadedAssets / assets.length) * 100
            );

            onProgress(progress);
        })
    );
}