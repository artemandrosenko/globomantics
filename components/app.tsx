import Banner from "./banner";
import HouseList from "./houseList";

const App = () => {
    return (
        <>
            <Banner headerText="Providing houses all over the world"/>
            <HouseList />
        </>
    )
};

// // The Children Prop
// const App = () => {
//     return (
//         <div>
//             <Banner>Providing houses all over the world</Banner>
//         </div>
//     )
// };

export default App;