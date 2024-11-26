import Heading from "../components/Heading";
const Bookmarks =() =>{
    return(
        <div>
            <h1 className="text-center text-5xl text-indigo-700 " >Bookmarks System</h1>
            <form className="space-x-5 bg-orange-300 px-10 py-7 w-1/2 m-auto top-1.5">
                <input className="border-slate-950 px-4 py-1 text- bg-white border-[2px] border- border-l-amber-950" type="text" placeholder="Website Name" />
                <input className="border-slate-950 px-4 py-1 text- bg-white" type="URL" placeholder="Website URL" />
                <button className="text-white bg-black rounded-sm px-4 py-1">Add</button>

                <Heading content="heading1" moreStyles=" text-purple-800"/>
        <Heading content="heading2" moreStyles="text-pink"/>
        <Heading content="heading3 "moreStyles="text-pik"/>
            </form>
        </div>
    );
};
export default Bookmarks