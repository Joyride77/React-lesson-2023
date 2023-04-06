import ThemeSwitch from "../ThemeSwitch";

export default function Topbar() {
    return (
        <div className="w-full bg-green-500">
            <div className="w-10/12 m-auto">
                <ThemeSwitch />
            </div>
        </div>
    )
}