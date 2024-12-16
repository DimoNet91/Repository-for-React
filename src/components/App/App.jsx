//import { FaBeer } from "react-icons/fa";
import { AiFillApple } from "react-icons/ai";
import AppBar from "../AppBar/AppBar";
import OfficerProfile from "../OfficerProfile/OfficerProfile";

const fistPilot = {
  id: 1,
  name: "Boby Bill",
  rank: "Ser",
  age: "43",
  spec: "Pilot",
  status: "Active",
};

const seconpilot = {
  id: 2,
  name: "Fil Mill",
  rank: "Major",
  age: "39",
  spec: "Shooter",
  status: "Retiered",
};

export default function App() {
  return (
    <div>
      <AppBar />
      <h1>
        React is cool <AiFillApple size={25} color="red" />
      </h1>
      <OfficerProfile officer={fistPilot} />
      <OfficerProfile officer={seconpilot} />
    </div>
  );
}
