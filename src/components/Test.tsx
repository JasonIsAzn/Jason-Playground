function Test() {
    return (
        <div className="grid grid-cols-2 gap-4">

            <div className="bg-green-300 w-52 h-72 m-8 static rounded-lg ">
                <div className="bg-white w-52 h-72 hover:-m-2 absolute rounded-lg shadow-lg hover:shadow-2xl transition-all duration-150 ease-out hover:ease-in ">
                    <h1 className="m-4 text-2xl font-bold">Wat is Lorem Ipsum?</h1>

                    <p className="m-4 text-sm">Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak</p>
                </div>
            </div>
        </div>
    )
}

export default Test;
