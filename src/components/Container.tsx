import React from "react"

const Container = ({ children }) => {
    return (
        <form className="w-full ">
            <div className="flex items-center border-b border-t border-gray1-g66 py-1">
            {children}
            </div>
        </form>
    )
}
export default Container