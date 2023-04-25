export default function PerkItem({children, title}: any) {
    return <div className="flex-1 p-4 border-r border-r-white">
        <h2 className="text-2xl my-5 font-bold">{title}</h2>
        {children}
    </div>
}