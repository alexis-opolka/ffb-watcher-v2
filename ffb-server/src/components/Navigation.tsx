

export default function NavMenu(){

  return(
    <div>
      Hello World
    </div>
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
    <a href={normalizedTargetLink}>
      {children}
    </a>
  )
}
