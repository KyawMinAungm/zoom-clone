"use client";
import React, { useState } from "react";
import HomeCard from "./HomeCard";
import { useRouter } from "next/navigation";

const MeetingTypyeList = () => {
  const [meeting, setMeeting] = useState<
    "isSchdulingMeeting" | "isJoiningMeeting" | "isInstanceMeeting" | undefined
  >();
  const router = useRouter()
  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <HomeCard
        description="Start an instance meeting"
        iconUrl="icons/add-meeting.svg"
        title="New Meeting"
        className="bg-orange-1"
        handleClick={() => setMeeting("isInstanceMeeting")}
      />
      <HomeCard
        description="Via invitation link"
        iconUrl="icons/join-meeting.svg"
        title="Join Meeting"
        className="bg-blue-1"
        handleClick={() => setMeeting("isJoiningMeeting")}
      />
      <HomeCard
        description="Plan your meeting"
        iconUrl="icons/schedule.svg"
        title="Schedule Meeting"
        className="bg-purple-1"
        handleClick={() => setMeeting("isSchdulingMeeting")}
      />
      <HomeCard
        description="Meeting recordings"
        iconUrl="icons/recordings.svg"
        title="View Recorndings"
        className="bg-yellow-1"
        handleClick={() => router.push('/recordings')}
      />
    </section>
  );
};

export default MeetingTypyeList;
