import { useEffect } from "react";
import Event from "../components/Event";
import { useCreateUserMutation } from "../store/MyEvents";
import { useSelector } from "react-redux";
import { RootState } from "../store/reducers/rootReducer";

const MyEventsPage = () => {
  const [getMyEvents] = useCreateUserMutation();
  const user = useSelector((state: RootState) => state.user);
  const events = useSelector((state: RootState) => state.event);
  useEffect(() => {
    getMyEvents(user.id);
  }, []);
  return (
    <div className="flex h-full w-full flex-col  items-center justify-start gap-[25px]">
      <h1 className=" text-center text-[25px] dark:text-white">My Events</h1>
      <div className="grid grid-cols-3 gap-4 pb-[25px]">
        {events.map((value, index) => (
          <Event
            id={index}
            title={value.title}
            imageUrl={value.imageUrl}
            description={value.description}
            date={value.date}
            location={value.location}
            time={value.time}
            category={value.category}
          />
        ))}
      </div>
    </div>
  );
};

export default MyEventsPage;