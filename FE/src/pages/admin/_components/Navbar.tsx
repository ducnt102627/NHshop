
import NavbarRroutes from "@/components/NavbarRroutes";
import MobileSidebar from "./MobileSidebar";

const Navbar = () => {
    return (
        <div className="p-4 border-b h-full flex items-center bg-whiteshadow-sm ">
            <MobileSidebar />
            <NavbarRroutes />
        </div>
    );
};

export default Navbar;