import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://scontent.fsgn8-2.fna.fbcdn.net/v/t39.30808-6/291579883_1217668312340111_5133628973970417601_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=3dtCCuwJMsIAX9d2ML9&_nc_ht=scontent.fsgn8-2.fna&oh=00_AT9gyZJKyo4P4eFW-7Uh8_Us3NHbMkPfOp7mJwxZcG5wfw&oe=633500E7"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Cong Chi Nguyen</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">congchinguyen@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+1 2345 67 89</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    450 Le Van Viet, Viet Nam
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">Phu Yen</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <List/>
        </div>
      </div>
    </div>
  );
};

export default Single;
