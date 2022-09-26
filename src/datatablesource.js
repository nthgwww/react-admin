export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Bui Van Tan",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    email: "vantanbui@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Vo Quang Vinh",
    img: "https://scontent.fsgn13-4.fna.fbcdn.net/v/t1.6435-9/149334588_861828507708562_6176440130225353309_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=c1cHdEtqM4wAX9tEr-e&_nc_ht=scontent.fsgn13-4.fna&oh=00_AT8o5ui1RhgYueLK5b2KgGD5NB5BXTbxiFIOVrVFz6u7EA&oe=63553ABE",
    email: "itshop2@gmail.com",
    status: "passive",
    age: 42,
  },
  {
    id: 3,
    username: "Nhat Tam Huynh",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "itshop3@gmail.com",
    status: "pending",
    age: 45,
  },
  {
    id: 4,
    username: "Ho Ngoc Thong",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "itshop4@gmail.com",
    status: "active",
    age: 16,
  },
  {
    id: 5,
    username: "Nguyen Cong Chi",
    img: "https://scontent.fsgn8-2.fna.fbcdn.net/v/t39.30808-6/291579883_1217668312340111_5133628973970417601_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=3dtCCuwJMsIAX9d2ML9&_nc_ht=scontent.fsgn8-2.fna&oh=00_AT9gyZJKyo4P4eFW-7Uh8_Us3NHbMkPfOp7mJwxZcG5wfw&oe=633500E7",
    email: "congchinguyen@gmail.com",
    status: "active",
    age: 22,
  },
];
