function BrandLogo() {
  return (
    <div className="flex items-center gap-3" aria-label="Auxi Data">
      <div className="relative h-12 w-14">
        <div
          className="
            absolute left-0 top-2 h-9 w-8 rotate-[10deg]
            rounded-tl-2xl rounded-tr-md rounded-br-2xl rounded-bl-md
            bg-gradient-to-br from-cyan-400 via-cyan-500 to-violet-600
          "
        />

        <div
          className="
            absolute left-[18px] top-1 h-10 w-8 -rotate-[12deg]
            rounded-tl-md rounded-tr-2xl rounded-br-md rounded-bl-2xl
            bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-600
          "
        />

        <div className="absolute left-[12px] top-[24px] h-2 w-7 rotate-[-12deg] rounded-full bg-white" />

        <div className="absolute right-0 top-3 space-y-1">
          <span className="block h-1 w-5 rounded-full bg-cyan-500" />
          <span className="block h-1 w-3 rounded-full bg-cyan-500" />
          <span className="block h-1 w-4 rounded-full bg-cyan-500" />
        </div>
      </div>

      <div className="text-3xl font-bold tracking-tight">
        <span className="text-[#172554]">Auxi</span>
        <span className="text-[#20aeba]"> Data</span>
      </div>
    </div>
  )
}

export default BrandLogo