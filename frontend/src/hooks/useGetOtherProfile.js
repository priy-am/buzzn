import { useEffect } from "react";
import { USER_API_END_POINT } from "../utlis/constant";
import { useDispatch } from 'react-redux';
import { getOtherUser } from "../redux/userSlice";

const useGetOtherProfile =  (id) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchOtherProfile =  async()=>{
      try {
        const res = await fetch(`${USER_API_END_POINT}/otheruser/${id}`, {
          credentials: "same-origin",
        });
        const response = await res.json()
        dispatch(getOtherUser(response))
      } catch (error) {
        console.log("Network error " + error);
      }
    }
    fetchOtherProfile();
  }, []);
};
export default useGetOtherProfile;
