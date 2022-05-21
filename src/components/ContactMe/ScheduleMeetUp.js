import React from "react";
import { ScheduleMeeting } from "react-schedule-meeting";

function ScheduleMeetUp(props) {
    const availableTimeslots = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
        14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    31, 32, ].map((id) => {
        return {
            id,
            startTime: new Date(new Date(new Date().setDate(new Date().getDate() + id)).setHours(9, 0, 0, 0)),
            endTime: new Date(new Date(new Date().setDate(new Date().getDate() + id)).setHours(17, 0, 0, 0)),
        };
    });



    return (
        <>
            <ScheduleMeeting
                borderRadius={10}
                primaryColor='#3f5b85'
                eventDurationInMinutes={30}
                availableTimeslots={availableTimeslots}
                onStartTimeSelect={(e) => {
                    props.set_start_date(e.startTime);
                    props.set_info_selected_active(true);
                    // set_start_date(e.startTime);
                    // set_info_selected_active(true);
                }}
            />
        </>
    )
}

export default ScheduleMeetUp;