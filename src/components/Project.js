export default function Project(props) {
  return (
    <a
      className="h-auto w-80 flex flex-col bg-[#282828] hover:bg-[#3f3f3f] ease-in-out duration-200 rounded-xl shadow-lg p-4"
      href="https://www.linkedin.com/in/brennan-cleland/"
      target="_blank"
      rel="noreferrer"
      >
      <h1 className="text-white font-medium text-3xl break-words">{props.name}</h1>
      <h3 className="text-[#908d96] text-xl break-words mt-2 px-1">{props.description}</h3>
      <img className="w-full h-full rounded-xl mt-2" src={props.img} alt="Project"></img>
    </a>
  )
}