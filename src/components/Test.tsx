
function Test() {
    return (
        <div className="bg-[#F2F2F2] h-screen flex justify-center items-center">
            <div className="list">
                {/* Items */}
                <div className="bg-[#E9E9E9] p-5 border border-[#C9C6C655] rounded-md w-[280px] group is-active">
                    <div className="flex items-center">
                        <div className="w-full 
                        group-[.is-active]:font-bold">Education</div>
                        <div className="text-xl rotate-90
                        group-[.is-active]:rotate-[270deg]">{">"}</div>
                    </div>
                    <div className="overflow-hidden max-h-0 
                    group-[.is-active]:max-h-[100px]">Texas A&M University</div>
                </div>
            </div>
        </div>
    )
}

export default Test;
