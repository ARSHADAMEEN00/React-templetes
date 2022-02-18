// Font Awesome Style Sheet
import "@fortawesome/fontawesome-free/css/all.min.css";

// Tailwind CSS Style Sheet
import "assets/styles/tailwind.css";
import { Fragment, useState } from "react";
import IsoTopeGrid from "react-isotope";
import { image1, image2, image3, image4, image5 } from "../../assets/img";
import { Tab, TabItem, TabList } from "@material-tailwind/react";
import Title from "./Title";

const cardsLayout = [
  {
    id: "a",
    row: 0,
    col: 0,
    w: 1,
    h: 1,
    img: [image3],

    filter: ["Mobile", "Web"],
  },
  {
    id: "b",
    row: 0,
    col: 1,
    w: 1,
    h: 1,
    img: [image3],
    filter: ["Web"],
  },
  {
    id: "c",
    row: 0,
    col: 3,
    w: 1,
    h: 1,
    img: [image4],

    filter: ["Mobile", "Web"],
  },
  {
    id: "d",
    row: 1,
    col: 0,
    w: 1,
    h: 1,
    img: [image5],

    filter: ["Web", "Mobile"],
  },
  {
    id: "e",
    row: 1,
    col: 1,
    w: 1,
    h: 1,
    img: [image2],

    filter: ["Mobile"],
  },
  {
    id: "f",
    row: 1,
    col: 2,
    w: 1,
    h: 1,
    img: [image3],

    filter: ["Web"],
  },
  {
    id: "h",
    row: 2,
    col: 3,
    w: 1,
    h: 1,
    img: [image1],

    filter: ["Web"],
  },
];

const filtersDefault = [
  { label: "All", isChecked: false },
  { label: "Web", isChecked: true },
  { label: "Mobile", isChecked: false },
  // { label: "chart", isChecked: false },
  // { label: "tile", isChecked: false },
];

function TouchBar() {
  const [filters, updateFilters] = useState(filtersDefault);
  const [ParentHeight, setParentHeight] = useState();

  const handleDisplay = () => {
    if (window.innerWidth > 1200) {
      return 4;
    } else if (1200 > window.innerWidth && 768 <= window.innerWidth) {
      return 3;
    } else if (768 > window.innerWidth && 480 <= window.innerWidth) {
      return 2;
    } else if (window.innerWidth < 480) {
      return 1;
    }
  };

  return (
    <>
      <section className="relative block pt-20 pb-20">
        <div className="container max-w-7xl mx-auto px-4">
          <Title heading="What we Do">
            According to the National Oceanic and Atmospheric Administration,
            Ted, Scambos, NSIDClead scentist, puts the potentially record
            maximum.
          </Title>
          <Tab className="shadow-none custome_tab">
            <FilterBox
              filters={filters}
              updateFilters={updateFilters}
              setParentHeight={setParentHeight}
              handleDisplay={handleDisplay()}
            />

            <div
              className="container isoTopContainer"
              style={{ height: ParentHeight ? ParentHeight : "100vh" }}
            >
              <IsoTopeGrid
                gridLayout={cardsLayout} // gridlayout of cards
                noOfCols={handleDisplay()} // number of columns show in one row
                unitWidth={200} // card width of 1 unit
                unitHeight={200} // card height of 1 unit
                filters={filters} // list of selected filters
              >
                {cardsLayout?.map((card, index) => {
                  return (
                    <div key={card.id} className={card.filter[0]}>
                      <div className="gallery-item">
                        {card.img?.map((f, index) => (
                          <Fragment key={index}>
                            <img src={f} alt={f} />
                          </Fragment>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </IsoTopeGrid>
            </div>
          </Tab>
        </div>
      </section>
    </>
  );
}

export default TouchBar;

export function FilterBox({
  filters,
  updateFilters,
  setParentHeight,
  handleDisplay,
}) {
  const onFilter = (event) => {
    const {
      target: { value },
    } = event;

    updateFilters(
      filters.map((f) => {
        return {
          ...f,
          isChecked: value === "All" ? true : f.label === value,
        };
      })
    );

    const height =
      document.querySelector(".styles_isotope-container__3X0JH")
        ?.childElementCount / handleDisplay;

    setParentHeight((height + 1) * 200);
  };

  return (
    <TabList>
      {filters.map((f, index) => (
        <TabItem
          key={index}
          style={{ cursor: "default" }}
          ripple="light"
          active={f.isChecked === true ? true : false}
          className="mx-1"
        >
          <input
            id={f.label}
            type="checkbox"
            value={f.label}
            onChange={onFilter}
            checked={f.isChecked}
            className="btn"
            hidden
          />
          <label style={{ cursor: "pointer" }} htmlFor={f.label}>
            {f.label}
          </label>
        </TabItem>
      ))}
    </TabList>
  );
}
