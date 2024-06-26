import { useEffect } from "react";
import { USER_API_END_POINT } from "../utlis/constant";
import { useDispatch } from "react-redux";
import { getMyProfile } from "../redux/userSlice";

const useGetProfile = (id) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchProfile = async () => {
      console.log(`getprofile me :- ${id}`);
      try {
        const res = await fetch(`${USER_API_END_POINT}/profile/${id}`,{
          credentials:"same-origin",
        });
        const response = await res.json();
        dispatch(getMyProfile(response))
      } catch (error) {
        console.log(`network error ${error}`);
      }
    };
    fetchProfile();
  }, [id]);
};
export default useGetProfile;
