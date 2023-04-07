import Link from "next/link";
import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';


export default function NavigationBar(): JSX.Element {

    // const router = useRouter();
    // const [searchQuery, setSearchQuery] = useState("")
    // const onSearch = (e: React.FormEvent) => {
    //     e.preventDefault();

    //     if (typeof searchQuery !== "string") {
    //         return;
    //     }

    //     const encodedSearchQuery = encodeURI(searchQuery);
    //     router.push(`/search?q=${encodedSearchQuery}`);
    // }
    return (
        <div className="items-center h-[6.25rem] grid grid-cols-12 px-5 bg-myred">
            <div className="col-span-2">
                <img className="w-40" src="https://images.fandango.com/cms/assets/2d5a3340-be84-11ed-9d20-83ee649e98bd--rt25-logo-mainnav-161x50.svg" alt="logo" />
            </div>
            <div className="grid grid-cols-12 col-span-4 items-center bg-search rounded-2xl pl-3 border-solid border-2 border-slate-50">
                <SearchIcon className="text-white" />
                <form className="col-span-11 w-full">
                    <input className="h-[2.1rem] pl-1 bg-transparent placeholder-white text-white w-full" type="text" placeholder="Search movies, TV, actors, more..." />
                </form>
            </div>
            <div className="grid grid-flow-row col-span-6 font-body  text-slate-50">
                <div className="text-right mb-4">
                    <Link className="pr-4" href="#">What's the Tomatometer@?</Link>
                    <Link className="pr-4" href="#">Critics</Link>
                    <Link href="#">LOGIN/SIGNUP</Link>
                </div>
                <div className="grid grid-flow-col text-right font-bold">
                    <Link href="/movies">MOVIES</Link>
                    <Link href="#">TV SHOWS</Link>
                    <Link href="#">MOVIE TRIVIA</Link>
                    <Link href="#">NEWS</Link>
                    <Link href="#">SHOWTIMES</Link>
                </div>
            </div>
        </div>
    )
}