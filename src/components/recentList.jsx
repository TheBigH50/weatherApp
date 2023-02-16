export default function RecentList ({recent}) {

let keyNumber = 34;

    return (
        <div className="flex flex-col self-center z-20 text-yellow-300 border-yellow-300 border p-4 rounded-lg w-10/12">
            <h6 className="flex self-center">Recent Cities</h6>
<ul className="flex flex-col self-center w-full">
    {recent.map((city) => <li key={`${keyNumber++}${recent}`} className="text-center m-1 border-dotted border-b w-full border-yellow-300">{`\u00BB \u0000 \u0000 ${city} \u0000 \u0000 \u00AB`}</li>)}
</ul>
        </div>
    )

}