export default function RoadmapItem({ contents = [], title }: any) {
  return (
    <div className="p-3 border-2 border-orange-500">
      <h2 className="text-2xl my-5 font-bold">{title}</h2>
      <ul className="pl-4 font-extralight">
        {contents.map((item: any, index: number) => (
          <li key={index} className="pb-1">
            <span className="pr-2 text-xl">&#x2022;</span> {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
