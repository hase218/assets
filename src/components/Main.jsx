import ImageSideBar from "./ImageSideBar";
import WelcomeTxt from "./WelcomTxt";

export default function Header() {
    return (
        <main>
            <WelcomeTxt />
            <aside>
                <ImageSideBar />
            </aside>
        </main>

    );
}