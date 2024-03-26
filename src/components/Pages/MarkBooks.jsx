import LocalSavedData from "../DataHook/localSaveData";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadBooks from "./ReadBooks";
import LocalSavedData2 from "../DataHook/LocalSavedData2";
import WishBooks from "./WishBooks";


const MarkBooks = () => {
    const { localSaveData } = LocalSavedData();
    const { wishList } = LocalSavedData2();


    return (
        <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-3xl font-bold bg-[#f3f3f3] py-8 rounded-lg">Books</h1>
            <div className="text-start text-3xl mt-5">
                <Tabs>
                    <TabList>
                        <Tab>Read Books</Tab>
                        <Tab>Wishlist Books</Tab>
                    </TabList>

                    <TabPanel>
                        {
                            localSaveData.map((readBook) => <ReadBooks key={readBook.id} readBook={readBook}></ReadBooks>)
                        }
                    </TabPanel>
                    <TabPanel>
                        {
                            wishList.map((wish) => <WishBooks key={wish.id} wish={wish}></WishBooks>)
                        }
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default MarkBooks;