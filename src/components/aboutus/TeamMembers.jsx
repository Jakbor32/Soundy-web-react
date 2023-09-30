import React from "react";
import TeamMemberCard from "./TeamMemberCard";
import { aboutUsData } from "../../lib/Constants";

const TeamMembers = () => {
  return (
    <div className="sm:mt-20">
      {aboutUsData.map((member, index) => (
        <TeamMemberCard
          key={index}
          name={member.name}
          surname={member.surname}
          desc={member.desc}
          url={member.url}
          alt={member.alt}
          reverse={index % 2 === 1}
        />
      ))}
    </div>
  );
};

export default TeamMembers;
