import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Display from "../Display/Displays";
import { useEffect, useState } from "react";
function Fetch() {
  const [arr, set_arr] = useState([]);
  const [state, setState] = useState("");
  function get_data() {
    Axios.get("https://dummyjson.com/users")
      .then((res) => {
        if (res.status === 200) {
          set_arr(res.data.users);
          setState("success");
        } else {
          setState("failed");
        }
      })
      .catch((err) => {
        alert(err);
      });
  }
  useEffect(get_data, []);

  function mapping(val) {
    return <Display prop={val} key={val.id}/>;
  }

  const listName = () => {
    if (state === "success") {

      return (
        [
          <tbody key={"unique"}>
        <tr>
          <th>Sno</th>
          <th>Profile Pic</th>
          <th>FirstName</th>
          <th>LastName</th>
          <th>Email</th>
          <th>Username</th>
          <th>Domain</th>
          <th>IP</th>
          <th>University</th>
          
        </tr>
        </tbody>,

        arr.map(mapping)]
        );
    }
  };

  return (
    <>
      <table className="table table-dark table-bordered">
        {listName()}
        </table>
    </>
  );
}
export default Fetch;
