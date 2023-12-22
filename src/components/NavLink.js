export default function NavLink(props) {
  return (
    <a className="group hover:text-[#aaaaaa] ease-in-out duration-150" href={props.link}>
      {props.text}
      <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
    </a>
  )
}