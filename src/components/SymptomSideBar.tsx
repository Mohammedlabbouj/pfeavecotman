import { useState } from "react";
import "../components/sideBar.css";
import { FaBars,FaTimes } from "react-icons/fa";
// import Tabe from "./Tabe";
const ToggleSidebarButton: React.FC<{ onClick: () => void }>=({
  onClick
}) => {
  return (
    <button className=" btn-primary" style={{cursor:"pointer"}} onClick={onClick}>
      <FaBars></FaBars>
    </button>
  );
};
type prop={
  symptoms:string[];
};
const SymptomSideBar  = ({symptoms}:prop) => {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [showCondition, setShowCondition] = useState(false);
  const [filterName, setFilterName] = useState("");
  const toggleList = ()=>{
    setHidden(!hidden);
  }
  const [list, setList] = useState<string[]>([...symptoms]);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const toggleConditionBar = () => {
    setShowCondition(!showCondition);
  };
  const handleCheckboxChange = (itemName: string) => {
    const isChecked = checkedItems.includes(itemName);
    if (isChecked) {
      // If item is already checked, remove it from the checked items
      setCheckedItems(checkedItems.filter((item) => item !== itemName));
    } else {
      // If item is not checked, add it to the checked items
      setCheckedItems([...checkedItems, itemName]);
    }
  };
  console.log(checkedItems)
  return (
    <>
      <div style={{ position: "absolute", top: "0%", display: "flex" }}>
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-md">
          <div className=" navContianer">
            <a className="navbar-brand text-primary">Sychecker</a>
            <div className="navButton">
              <ToggleSidebarButton onClick={toggleSidebar} />
            </div>
          </div>
        </nav>
        <div
          className={`sidebar ${isOpen ? "active" : ""}`}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div className="sd-header">
            <h4 className="mb-0">Sidebar Header</h4>
            <div className="btn btn-primary" onClick={toggleSidebar}>
              <FaTimes className="faTimes" />
            </div>
          </div>
          <div className="sd-body">
            <ul>
              <li>
                <a
                  className="sd-link"
                  onClick={() => {
                    setHidden(true);
                    setFilterName("head");
                  }}
                >
                  Head
                </a>
              </li>
              <li>
                <a
                  className="sd-link"
                  onClick={() => {
                    setHidden(true);
                    setFilterName("neck");
                  }}
                >
                  Neck
                </a>
              </li>
              <li>
                <a
                  className="sd-link"
                  onClick={() => {
                    setHidden(true);
                    setFilterName("chest");
                  }}
                >
                  Chest
                </a>
              </li>
              <li>
                <a
                  className="sd-link"
                  onClick={() => {
                    setHidden(true);
                    setFilterName("eyes");
                  }}
                >
                  Eyes
                </a>
              </li>
              <li>
                <a
                  className="sd-link"
                  onClick={() => {
                    setHidden(true);
                    setFilterName("skin");
                  }}
                >
                  Skin
                </a>
              </li>
              <li>
                <a
                  className="sd-link"
                  onClick={() => {
                    setHidden(true);
                    setFilterName("back");
                  }}
                >
                  Back
                </a>
              </li>
              <li>
                <a
                  className="sd-link"
                  onClick={() => {
                    setHidden(true);
                    setFilterName("leg");
                  }}
                >
                  Legs
                </a>
              </li>
              <li>
                <a
                  className="sd-link"
                  onClick={() => {
                    setHidden(true);
                    setFilterName("stomach");
                  }}
                >
                  stomach
                </a>
              </li>
            </ul>
          </div>
          <div className="btnCoondition">
            <button className="btnx conditionC" onClick={toggleConditionBar}>
              Condition
            </button>
          </div>
        </div>
        <div
          className={`sidebar-overlay ${isOpen ? "active" : ""}`}
          onClick={() => {
            toggleSidebar();
            // toggleList();
          }}
        ></div>
        <>
          {hidden && (
            <>
              <div className="listOfSymptoms">
                <h3>List Of Symptoms</h3>
                <div className="symptoms">
                  {list
                    .filter((item) =>
                      item.toLowerCase().includes(filterName.toLowerCase())
                    )
                    .map((item, index) => (
                      <li key={index} className="listOfItames">
                        <input
                          type="checkbox"
                          id={item}
                          name={item}
                          className="checkBox"
                          checked={checkedItems.includes(item)} // Set checked attribute based on checkedItems state
                          onChange={() => handleCheckboxChange(item)}
                        />
                        <label htmlFor={item} className="label">
                          {item}
                        </label>
                      </li>
                    ))}
                </div>
                <div className="btnContianer">
                  <button className="btnx Done" onClick={toggleList}>
                    Done
                  </button>
                  <button className="btnx skip" onClick={toggleList}>
                    skip
                  </button>
                </div>
              </div>
            </>
          )}
        </>
        <>
          {showCondition && (
            <div className="conditionContant">
              <b>condition</b>
              <hr style={{ borderColor: "gray", width: "100%" }} />
            </div>
          )}
        </>
      </div>
      {/* <Tabe></Tabe> */}
    </>
  );
};

export default SymptomSideBar;
