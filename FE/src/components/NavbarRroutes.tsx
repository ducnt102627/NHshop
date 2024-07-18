import React from 'react'
import SearchInput from './SearchInput'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { LogOut } from 'lucide-react'
const NavbarRroutes = () => {
    return (
        <>
            <div className="hidden md:block"><SearchInput /></div>
            <div className="flex gap-x-2 ml-auto">
                <Link to="/">
                    <Button size="sm" variant="secondary">
                        <LogOut className='h-4 w-4 mr-2' /> Logout
                    </Button>
                </Link>
            </div>
        </>
    )
}

export default NavbarRroutes