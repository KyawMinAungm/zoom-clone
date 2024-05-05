"use client";
import React, { useState } from "react";
import HomeCard from "./HomeCard";
import { useRouter } from "next/navigation";
import MeetingModel from "./MeetingModel";
import { useUser } from "@clerk/nextjs";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "./ui/textarea";
import DatePicker from "react-datepicker";

const MeetingTypyeList = () => {
  const [meeting, setMeeting] = useState<
    "isSchdulingMeeting" | "isJoiningMeeting" | "isInstanceMeeting" | undefined
  >();
  const router = useRouter();
  const user = useUser();
  const client = useStreamVideoClient();
  const [value, setValue] = useState({
    dateTime: new Date(),
    description: "",
    link: "",
  });
  const [callDetail, setCallDetail] = useState<Call>();
  const { toast } = useToast();
  const createMeeting = async () => {
    if (!user || !client) return;
    try {
      if (!value.dateTime) {
        toast({
          title: "Please select a date and time",
        });
        return;
      }
      const id = crypto.randomUUID();
      const call = client.call("default", id);
      if (!call) throw new Error(" Fail to create call");
      const startAt =
        value.dateTime.toISOString() || new Date(Date.now()).toISOString();
      const description = value.description || "Instance meeting";
      await call.getOrCreate({
        data: {
          starts_at: startAt,
          custom: {
            description,
          },
        },
      });
      setCallDetail(call);
      if (!value.description) {
        router.push(`/meeting/${call.id}`);
        toast({
          title: "Meeting created",
        });
      }
    } catch (error) {
      console.log(error);
      toast({ title: "Failed to create meeting" });
    }
  };
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
        title="View Recordings"
        className="bg-yellow-1"
        handleClick={() => router.push("/recordings")}
      />
      <MeetingModel
        isOpen={meeting === "isInstanceMeeting"}
        onClose={() => setMeeting(undefined)}
        title="Start an instance meeting"
        className="text-center"
        buttonText="Start meeting"
        handleClick={createMeeting}
      />
      {!callDetail ? (
        <MeetingModel
          isOpen={meeting === "isSchdulingMeeting"}
          onClose={() => setMeeting(undefined)}
          title="Schedule Meeting"
          className="text-center"
          buttonText="Create meeting"
          handleClick={() => {            }}
        >
          <div className="flex flex-col  gap-2.5">
            <label>Add a description </label>
            <Textarea className="bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0 border-none " />
          </div>
          <div className="flex flex-col  gap-2.5">
            <label>Select date and time </label>
            <DatePicker
              className="bg-dark-3 w-full rounded focus:outline-none p-2"
              selected={value.dateTime}
              showTimeSelect
              timeIntervals={15}
              dateFormat={"MMMM d, yyyy hh:mm  aa"}
              onChange={(date) => {
                setValue({ ...value, dateTime: date! });
              }}
            />
          </div>
        </MeetingModel>
      ) : (
        <MeetingModel
          isOpen={meeting === "isSchdulingMeeting"}
          onClose={() => setMeeting(undefined)}
          title="Meeting Created"
          className="text-center"
          buttonText="Copy meeting link"
          buttonIcon="/icons/copy.svg"
          image="/icons/checked.svg"
          handleClick={() => {
            // navigator.clipboard.write
          }}
        />
      )}
    </section>
  );
};

export default MeetingTypyeList;
