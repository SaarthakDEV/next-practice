import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

const Header = () => {
    const pathname = usePathname();
    const links = [
        {
            title: "Link1",
            link: "/19-practice/nested"
        },
        {
            title: "Link2",
            link: "/20-practice"
        }
    ]
  return (
    <div>
      {
        links?.map(link => {
            const activeTab = pathname == link.link;
            return <Link href={link.link}>     { activeTab ? ("This is active" + link.title) : link.title}</Link>

        }
        )
      }
    </div>
  )
}

export default Header
