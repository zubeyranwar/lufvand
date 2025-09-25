export default function ErrorPage({error}: {error: Error}) {
    console.log({ error });
    return (
        <div className="flex flex-col items-center text-red-400">
            {error.message}
        </div>
    )
}