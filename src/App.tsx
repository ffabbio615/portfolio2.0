
import './App.scss'
import BootScreen from "./components/BootScreen/BootScreen";
import Desktop from "./components/Desktop/Desktop";
import { useAssets } from "./hooks/useAssets";

export default function App() {
  const { loading } = useAssets();

  if (!loading) {
    return <BootScreen />;
  }

  return <Desktop />;
}
