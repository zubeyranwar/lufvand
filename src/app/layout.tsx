import NavBar from "./_components/nav-bar.tsx";

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <div className="relative min-h-screen w-full">
            <NavBar />
            {children}
        </div>
    )
}