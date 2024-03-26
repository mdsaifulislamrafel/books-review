import LocalSavedData from "../DataHook/localSaveData";


const MarkBooks = () => {
    const { localSaveData } = LocalSavedData();
    console.log(localSaveData);
    return (
        <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-3xl font-bold bg-[#f3f3f3] py-8 rounded-lg">Marks Book {localSaveData.length}</h1>
        </div>
    );
};

export default MarkBooks;