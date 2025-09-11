import NavBar from "./_components/nav-bar.tsx";

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <div className="h-full w-full">
            <NavBar />
            {children}
        </div>
    )
}