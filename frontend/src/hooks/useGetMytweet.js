import { useEffect } from "react";
import { TWEET_API_END_POINT} from "../utlis/constant";
import { useDispatch } from "react-redux";
import { getAlltweet } from "../redux/tweetSlice";

const useGetMytweet = (id) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMytweet = async () => {
      console.log(`getprofile me :- ${id}`);
      try {
        const res = await fetch(`${TWEET_API_END_POINT}/alltweets/${id}`,{
          credentials:"same-origin",
        });
        const response = await res.json();
        dispatch(getAlltweet(response))
      } catch (error) {
        console.log(`network error ${error}`);
      }
    };
    fetchMytweet();
  }, [id]);
};
export default useGetMytweet;
