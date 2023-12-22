export default function PageLink(props) {
  const Icon = props.icon;
  return (
    <a
    className="w-auto h-18 flex items-center justify-between rounded-md bg-[#050505] border-2 p-4 z-10 hover:border-[#840000] hover:h-20 transition-all"
    href={props.link}
    target="_blank"
    rel="noreferrer"
    >
      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white mr-2">
        <Icon className="text-xl" />
      </div>
      <h1 className="text-xl text-white font-bold scale-y-125">{props.text}</h1>
    </a>
  )
}