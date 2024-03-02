/* eslint-disable react/prop-types */
function Header({dispatch}) {
    return (
        <div className="my-6 container px-6 mx-auto flex flex-col md:flex-row items-start md:items-center justify-between pb-4 border-b border-gray-300">
            <div>
                <h4 className="text-2xl font-bold leading-tight text-gray-900 dark:text-stone-950">Address Updater</h4>
                <ul aria-label="current Status" className="flex flex-col md:flex-row items-start md:items-center text-gray-600 dark:text-gray-400 text-sm mt-3">
                </ul>
            </div>
            <div className="mt-6 md:mt-0">
                <button onClick={() => dispatch({ type: "add"})} className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Add Address</button>
            </div>
        </div>
    )
}

export default Header
