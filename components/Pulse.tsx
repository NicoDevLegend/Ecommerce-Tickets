export default function Pulse() {
  return (
    <div className="border border-green-300 shadow rounded-md p-4 w-full h-80 mx-auto">
      <div className="animate-pulse flex flex-col space-x-2">
        <div className="rounded-sm bg-green-200 h-36 w-full mb-6 mx-auto"></div>
        <div className="flex flex-col space-y-6 py-1 mx-auto">
          <div className="h-2 bg-green-200 rounded"></div>
          <div className="h-2 bg-green-200 rounded"></div>
          <div className="h-2 bg-green-200 rounded"></div>
        </div>
      </div>
    </div>
  );
}
