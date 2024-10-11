import ImageSideBar from "./ImageSideBar";
import WelcomeTxt from "./WelcomTxt";

export default function Main() {
    return (
        <main>
            <WelcomeTxt />
            <aside>
                <ImageSideBar />
            </aside>
        </main>

    );
}