import './EmptyFolder.scss';

import { useTranslation } from "react-i18next";

export default function EmptyFolder() {
    const { t } = useTranslation();

    return (
        <span className="empty-folder-message">{t("emptyFolder.message")}</span>
    );
}