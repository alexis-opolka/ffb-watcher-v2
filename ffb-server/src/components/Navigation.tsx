import BootStrapComponentWithTitle from "./bootstrapComponents";


export default function NavMenu({
  className,
  children
}:{
  className: string,
  children: React.ReactNode
}){

  return(
    <nav>
      <BootStrapComponentWithTitle title="Navigation" headerLevel={2}>
        {children}
      </BootStrapComponentWithTitle>
    </nav>
  )
}

export function NavOption({
  target,
  children
}: {
  target: string | URL,
  children: React.ReactNode | String
}){

  const normalizedTargetLink = target instanceof URL ? target.href : target;

  return (
    <li>
      <a href={normalizedTargetLink}>
        {children}
      </a>
    </li>
  )
}
