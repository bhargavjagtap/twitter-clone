import Image from 'next/image'
import SidebarLink from './SidebarLink'
import { HomeIcon } from "@heroicons/react/solid";
import {
    HashtagIcon,
    BellIcon,
    InboxIcon,
    BookmarkIcon,
    ClipboardListIcon,
    UserIcon,
    DotsCircleHorizontalIcon,
    DotsHorizontalIcon,
} from "@heroicons/react/outline";
import {signOut, useSession} from "next-auth/react";

const Sidebar = () => {
    const {data:session} = useSession();
    return (
        <div className="flex-col items-center hidden sm:flex 
        xl:items-start xl:w-[340px] p-2 fixed h-full">
            <div className="flex items-center justify-center p-0 h-14 w-14 hoverAnimation xl:ml-24">
                <Image src="https://img.icons8.com/color-glass/344/twitter.png" width={30} height={30}/>
            </div>
                <div className="space-y-2.5 mb-2.5 xl:ml-24">
                <SidebarLink text="Home" Icon={HomeIcon} active />
                <SidebarLink text="Explore" Icon={HashtagIcon} />
                <SidebarLink text="Notifications" Icon={BellIcon} />
                <SidebarLink text="Messages" Icon={InboxIcon} />
                <SidebarLink text="Bookmarks" Icon={BookmarkIcon} />
                <SidebarLink text="Lists" Icon={ClipboardListIcon} />       
                <SidebarLink text="Profile" Icon={UserIcon} />
                <SidebarLink text="More" Icon={DotsCircleHorizontalIcon} />
                </div>
                <button className="hidden ml-auto xl:inline bg-[#1d9bf0] text-white rounded-full w-56
                h-[52px] text-lg font-bold shadow-md hover:bg-[#1a8cd8]">Tweet</button>
                <div className="text-[#d9d9d9] flex items-center justify-center hoverAnimation
                mt-auto xl:ml-auto xl:-mr-5" onClick={signOut}>
                    <img src={session.user.image} alt="user" className="w-10 h-10 rounded-full xl:mr-2.5" />
                <div className="hidden leading-5 xl:inline">
                    <h4 className="font-bold">{session.user.name}</h4>
                    <p className="text-[#6e767d]">@{session.user.name}</p>
                </div>
                <DotsHorizontalIcon className="hidden h-5 ml-10 xl:inline" />
                </div>
        </div>
    )
}

export default Sidebar
